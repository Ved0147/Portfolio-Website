import { Eye, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "../data/portfolio";
import { API_BASE_URL } from "../config/api";

export function Header({ refreshAnalytics }: { refreshAnalytics: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleResumeDownload = async () => {
    const response = await fetch(
      `${API_BASE_URL}/resume`
    );
    const data = await response.json();
    window.open(data.url, "_blank");
    fetch(`${API_BASE_URL}/resume/download`, { method: "POST" });
    await refreshAnalytics();
  };
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Ved Vaiwala, back to top">
          <span className="brand-mark" aria-hidden="true">VV</span>
          <span>
            <strong>Ved Vaiwala</strong>
            <small>Backend & Data Developer</small>
          </span>
        </a>

        <button
          className="icon-button menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-resume" onClick={handleResumeDownload}>
            <Eye size={18} aria-hidden="true" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
