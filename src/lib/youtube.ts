export function extractYouTubeId(url: string): string {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0];
    }

    if (
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") ?? "";
      }

      const match = parsed.pathname.match(/^\/(?:embed|shorts)\/([^/?]+)/);
      return match?.[1] ?? "";
    }
  } catch {
    return "";
  }

  return "";
}

export const getYouTubeThumbnail = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

export const getYouTubeEmbed = (videoId: string) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
