import { extractYouTubeId } from "@/lib/youtube";

export type PortfolioVideo = {
  id: string;
  url: string;
  title: string;
  category: string;
  featured?: boolean;
};

const videoSource = [
  {
    url: "https://www.youtube.com/watch?v=1MDxczRaEIY&list=RD1MDxczRaEIY&start_radio=1",
    title: "Border",
    category: "AI Direction / T-Series",
    featured: true,
  },
  {
    url: "https://www.youtube.com/watch?v=uIhaDkU7jTc",
    title: "Devil",
    category: "Music Video / T-Series",
    featured: true,
  },
  {
    url: "https://www.youtube.com/watch?v=ZugEfmN5K3A&list=RDZugEfmN5K3A&start_radio=1",
    title: "Beeba",
    category: "AI Visuals / T-Series",
    featured: true,
  },
  {
    url: "https://youtu.be/WPpKKC3HS6I?si=9hDcw3Tdg4C-ewrb",
    title: "Drive",
    category: "Music Video / T-Series",
    featured: true,
  },
  {
    url: "https://youtu.be/8R6GZw-MeUc?si=_vUt87xmEUgBcTeK",
    title: "Rap God",
    category: "AI Visuals / T-Series",
    featured: true,
  },
  {
    url: "https://youtu.be/pG4nJjog-1Y?si=yegJKArJlEpMJ0lF",
    title: "Ghama Di Raat",
    category: "Cinematic Visuals / T-Series",
    featured: true,
  },
  {
    url: "https://youtu.be/sgJpwwAw5Jc?si=njEDnme4kL07HiVL",
    title: "Offline",
    category: "Music Video / T-Series",
  },
  {
    url: "https://youtu.be/1oBoVrfI_eY?si=_fznKc3AcZ5COoOU",
    title: "Chhori",
    category: "AI Visuals / T-Series",
  },
  {
    url: "https://youtu.be/G6EqwyLOQC4?si=2MfMx4aXrBC4CkOS",
    title: "Nachdi",
    category: "Music Video / T-Series",
  },
  {
    url: "https://youtu.be/a_Eq1P1UO4I?si=-K-zi9T4S6PANfmP",
    title: "Chal Mere Ghar",
    category: "Music Video / T-Series",
  },
  {
    url: "https://youtu.be/NYFIsq3x2Gc?si=rim-21ld-bJi0k4b",
    title: "Idhar Zindagi Ka",
    category: "Cinematic Visuals / T-Series",
  },
  {
    url: "https://youtu.be/lQBlXUQKRXc?si=XHc7hTCegUppdDRX",
    title: "Haiye Re",
    category: "Music Video / T-Series",
  },
  {
    url: "https://youtu.be/BFAfLLz3q18?si=RVunBzl-3WeoCCAv",
    title: "Deewanapan Iss Qadar",
    category: "Cinematic Visuals / T-Series",
  },
  {
    url: "https://youtu.be/MPopvAXm--4?si=jW6qY26aMcx7VyeY",
    title: "Sorry",
    category: "Music Video / T-Series",
  },
] as const;

export const videos: PortfolioVideo[] = videoSource.map((video) => ({
  ...video,
  id: extractYouTubeId(video.url),
}));

export const featuredVideos = videos.filter((video) => video.featured);
export const otherVideos = videos.filter((video) => !video.featured);

export const tools = [
  "Kling",
  "Runway",
  "Hailuo",
  "Sora",
  "Higgsfield",
  "Google Veo 3.1",
  "Google Flow",
  "Minimax Hailuo",
  "Wan 2.5",
  "Luma AI",
  "Midjourney",
  "Google Vertex",
  "Google Nano Banana",
  "OpenArt",
  "Freepik",
  "Firefly",
  "YouCam",
  "Topaz",
  "Claude",
  "ChatGPT",
];

export const experience = [
  {
    role: "AI Director",
    company: "T-Series",
    period: "Sep 2025 - Present",
    copy:
      "Owns the complete AI video pipeline - concept, storyline, storyboard, prompt direction, generation, edit, sound and final delivery.",
    marker: "01",
  },
  {
    role: "AI Photo Creation",
    company: "Gobo Labs · Animatics",
    period: "Jan 2025 - Apr 2025",
    copy:
      "Created AI animated films, Midjourney-led campaign visuals and polished layouts across diverse advertising briefs.",
    marker: "02",
  },
  {
    role: "AD Journey",
    company: "Film & Web Projects",
    period: "2020 - 2023",
    copy:
      "Built a production-first foundation across One Friday Night, Kalikh and Love Crisis - from continuity to full set coordination.",
    marker: "03",
  },
];
