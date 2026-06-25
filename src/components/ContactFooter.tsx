import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function ContactFooter() {
  return (
    <footer className="site-footer section-shell" id="contact">
      <div className="footer-cta">
        <p className="eyebrow">Open to ambitious collaborations</p>
        <h2>Let&apos;s create the future of stories.</h2>
        <a className="button button-primary" href="mailto:satayash@gmail.com">
          Start a conversation
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="footer-contact glass-panel">
        <a href="mailto:satayash@gmail.com">
          <Mail aria-hidden="true" />
          <span>
            <small>Email</small>
            satayash@gmail.com
          </span>
        </a>
        <a href="tel:+917045603723">
          <Phone aria-hidden="true" />
          <span>
            <small>Phone</small>
            +91 7045603723
          </span>
        </a>
        <span>
          <MapPin aria-hidden="true" />
          <span>
            <small>Based in</small>
            Thane, Mumbai
          </span>
        </span>
        <a
          href="https://www.linkedin.com/in/yash-sata-a4195a350"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin aria-hidden="true" />
          <span>
            <small>LinkedIn</small>
            yash-sata
          </span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Yash Sata</span>
        <span>AI Director · AI Artist</span>
      </div>
    </footer>
  );
}
