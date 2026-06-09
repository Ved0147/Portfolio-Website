import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ved Vaiwala</p>
        <a href="#top">
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
