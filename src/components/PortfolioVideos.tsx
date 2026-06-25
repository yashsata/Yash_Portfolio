import { ArrowRight } from "lucide-react";
import { featuredVideos, otherVideos } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { VideoGrid } from "./VideoGrid";

export function FeaturedWork() {
  return (
    <section
      className="content-section section-shell glass-panel featured-panel"
      id="work"
    >
      <SectionHeading
        eyebrow=""
        title="Featured work"
        action={
          <a className="text-link" href="#other-work">
            View all <ArrowRight aria-hidden="true" />
          </a>
        }
      />
      <VideoGrid videos={featuredVideos} playerGroup="featured" />
    </section>
  );
}

export function OtherWorksPanel() {
  return (
    <section
      className="content-section glass-panel overview-panel other-work-panel"
      id="other-work"
    >
      <SectionHeading
        eyebrow=""
        title="Other works"
        action={
          <a className="text-link" href="#contact">
            View all <ArrowRight aria-hidden="true" />
          </a>
        }
      />
      <VideoGrid videos={otherVideos} playerGroup="archive" compact />
    </section>
  );
}
