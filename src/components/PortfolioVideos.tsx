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
          <a className="text-link" href="#ai-videos">
            View all <ArrowRight aria-hidden="true" />
          </a>
        }
      />
      <VideoGrid videos={featuredVideos} playerGroup="featured" />
    </section>
  );
}

export function AIVideos() {
  return (
    <section
      className="content-section section-shell glass-panel ai-videos-panel"
      id="ai-videos"
    >
      <SectionHeading
        eyebrow=""
        title="AI videos"
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
