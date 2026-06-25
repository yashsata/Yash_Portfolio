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
  return (
    <div className={compact ? "video-grid" : "video-rail"}>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          playerKey={`${playerGroup}-${video.id}`}
          compact={compact}
        />
      ))}
    </div>
  );
}
