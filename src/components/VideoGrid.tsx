"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { PortfolioVideo } from "@/data/portfolio";
import { VideoCard } from "./VideoCard";

export function VideoGrid({
  videos,
  playerGroup,
  compact = false,
}: {
  videos: PortfolioVideo[];
  playerGroup: string;
  compact?: boolean;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction * Math.max(rail.clientWidth * 0.78, 320),
      behavior: "smooth",
    });
  };

  const cards = videos.map((video) => (
    <VideoCard
      key={video.id}
      video={video}
      playerKey={`${playerGroup}-${video.id}`}
      compact={compact}
    />
  ));

  if (!compact) {
    return <div className="video-rail">{cards}</div>;
  }

  return (
    <div className="netflix-carousel">
      <button
        className="carousel-control carousel-control-left"
        type="button"
        onClick={() => scrollRail(-1)}
        aria-label="Scroll AI videos left"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <div className="video-grid" ref={railRef}>
        {cards}
      </div>
      <button
        className="carousel-control carousel-control-right"
        type="button"
        onClick={() => scrollRail(1)}
        aria-label="Scroll AI videos right"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}
