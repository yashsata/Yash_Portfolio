import { AboutSection } from "@/components/AboutSection";
import { ContactFooter } from "@/components/ContactFooter";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import {
  FeaturedWork,
  OtherWorksPanel,
} from "@/components/PortfolioVideos";
import { ToolsSection } from "@/components/ToolsSection";
import { VideoPlaybackProvider } from "@/components/VideoPlaybackProvider";

export default function Home() {
  return (
    <VideoPlaybackProvider>
      <main>
        <Header />
        <HeroSection />
        <FeaturedWork />
        <section className="overview-grid section-shell">
          <ToolsSection />
          <OtherWorksPanel />
        </section>
        <ExperienceSection />
        <AboutSection />
        <ContactFooter />
      </main>
    </VideoPlaybackProvider>
  );
}
