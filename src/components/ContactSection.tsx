import { AlertCircle, CheckCircle2, LoaderCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 20) nextErrors.message = "Please add at least 20 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.setTimeout(() => {
      window.location.href = `mailto:vedvaiwala147@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
    }, 450);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build reliable software together.</h2>
          <p>
            I’m open to backend, data engineering, PIM/MDM, and enterprise implementation
            opportunities in India and internationally.
          </p>
          <div className="contact-details">
            <a href="mailto:vedvaiwala147@gmail.com">
              <Mail aria-hidden="true" />
              <span><small>Email</small>vedvaiwala147@gmail.com</span>
            </a>
            <a href="tel:+917600363063">
              <Phone aria-hidden="true" />
              <span><small>Phone</small>+91 7600363063</span>
            </a>
            <div>
              <MapPin aria-hidden="true" />
              <span><small>Location</small>Surat, Gujarat, India</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading">
            <h3>Start a conversation</h3>
            <p>This opens your email app with the message prepared.</p>
          </div>
          <div className="form-row">
            <label>
              Name
              <input
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? <span className="field-error" id="name-error">{errors.name}</span> : null}
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? <span className="field-error" id="email-error">{errors.email}</span> : null}
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me about the role or project..."
            />
            {errors.message ? <span className="field-error" id="message-error">{errors.message}</span> : null}
          </label>

          {status === "error" ? (
            <p className="form-status error" role="alert">
              <AlertCircle aria-hidden="true" /> Please review the highlighted fields.
            </p>
          ) : null}
          {status === "success" ? (
            <p className="form-status success" role="status">
              <CheckCircle2 aria-hidden="true" /> Your email draft is ready.
            </p>
          ) : null}

          <button className="button button-primary submit-button" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <><LoaderCircle className="spin" aria-hidden="true" /> Preparing email...</>
            ) : (
              <><Send size={18} aria-hidden="true" /> Send message</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
