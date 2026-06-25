import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section className="content-section section-shell" id="about">
      <div className="about-panel glass-panel">
        <Quote aria-hidden="true" />
        <blockquote>
          I don&apos;t just use AI tools,
          <br />
          I direct them to tell stories.
        </blockquote>
        <div className="signature">
          <span>— Yash Sata</span>
          <small>English · Hindi · Marathi · Gujarati</small>
        </div>
      </div>
    </section>
  );
}
