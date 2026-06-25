import { experience } from "@/data/portfolio";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";

export function ExperienceSection() {
  return (
    <section
      className="content-section section-shell glass-panel experience-panel"
      id="experience"
    >
      <SectionHeading eyebrow="" title="Experience" />
      <div className="experience-grid">
        {experience.map((item) => (
          <ExperienceCard key={item.marker} {...item} />
        ))}
      </div>
    </section>
  );
}
