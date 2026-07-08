const publicVideo = (fileName: string) => `/${encodeURI(fileName)}`;

export const BACKGROUND_VIDEOS = [
  "/youtube-bg.mp4",
  "/youtube-bg-2.mp4",
  "/brands-background.mp4",
] as const;

export const CUSTOM_BACKGROUND_VIDEOS = {
  abstractBlueLiquid: publicVideo(
    "Abstract Blue Liquid Fluid 4K 60FPS Motion Background Video Neon Glowing Water Sci-fi VJ Loop.mp4",
  ),
  abstractCircleNeon: publicVideo(
    "Abstract Circle Neon Blue Background 4K Motion Background Loop Glowing Moving Slow Merging VJ Loop.mp4",
  ),
  abstractFuturisticHexagon: publicVideo(
    "Abstract Futuristic Hexagons 4K Surface Motion Background Loop Sci-fi technology Blue Neon Light.mp4",
  ),
  abstractGlowingWhite: publicVideo(
    "Abstract Glowing White Star Approaching with Blue Ray Twinkle Seamless Motion Background 4K 60FPS.mp4",
  ),
  abstractNeonLight: publicVideo(
    "Abstract Neon Light Background Video, Yellow Spinning Motion Background Loop _ Free Stock Footage.mp4",
  ),
  abstractGeometricGrid: publicVideo(
    "Abstract geometric Grid Pattern Background Loop __ Free footage.mp4",
  ),
  blinkingNetwork: publicVideo(
    "Blinking Network Connection Background Video, Plexus Effect Background Loop _ Free Stock Footage.mp4",
  ),
  blueLight: publicVideo("Video Background Blue light Full HD.mp4"),
} as const;

export const HERO_VIDEOS = [
  BACKGROUND_VIDEOS[0],
  BACKGROUND_VIDEOS[1],
  CUSTOM_BACKGROUND_VIDEOS.abstractGlowingWhite,
];

export const WORK_BACKGROUND_VIDEOS = {
  "imedi-health": CUSTOM_BACKGROUND_VIDEOS.abstractCircleNeon,
  thrive: CUSTOM_BACKGROUND_VIDEOS.abstractFuturisticHexagon,
  purbi: CUSTOM_BACKGROUND_VIDEOS.abstractGeometricGrid,
  "ap-talent": CUSTOM_BACKGROUND_VIDEOS.abstractNeonLight,
  pickleberry: CUSTOM_BACKGROUND_VIDEOS.blinkingNetwork,
  "healthcare-24hr": CUSTOM_BACKGROUND_VIDEOS.blueLight,
} as const;

export const SHOWCASE_DATA = [
  {
    id: 1,
    title: "Social Media Strategy",
    description:
      "Turning brand ideas into brand experiences through data-driven social strategies and engagement.",
    video: CUSTOM_BACKGROUND_VIDEOS.abstractBlueLiquid,
  },
  {
    id: 2,
    title: "Influencer Marketing",
    description:
      "Bridging the gap between brands and their audiences through authentic influencer collaborations.",
    video: BACKGROUND_VIDEOS[1],
  },
  {
    id: 3,
    title: "Event Production",
    description:
      "Specializing in luxury event production and global exhibition management.",
    video: BACKGROUND_VIDEOS[0],
  },
];

export const BRANDS = [
  { name: "Healthcare 24hr", logo: "/brands/healthcare_24hr.png" },
  { name: "INAYAS", logo: "/brands/inayas.png" },
  { name: "LATCHANAM", logo: "/brands/latchanam.png" },
  { name: "Arikas", logo: "/brands/arikas.png" },
  { name: "OMEL", logo: "/brands/omel.png" },
  { name: "Pickleberry", logo: "/brands/pickleberry.png" },
  { name: "Thrive", logo: "/brands/thrive.png" },
  { name: "AP Talent", logo: "/brands/ap_talent.png" },
  { name: "IMEDI.HEALTH", logo: "/brands/imedi_health.png" },
  { name: "PURBI", logo: "/brands/purbi.png" },
];

export const REVIEWS = [
  {
    name: "Dr. Sarah Chen",
    role: "Director of Operations",
    company: "IMEDI.HEALTH",
    content:
      "The level of precision and cinematic quality Printdash brings to our brand is unparalleled. They didn't just build a site; they built an experience.",
    logo: "/brands/imedi_health.png",
  },
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "PURBI International",
    content:
      "Working with Printdash was a game-changer. Our digital presence now matches the premium nature of our global operations.",
    logo: "/brands/purbi.png",
  },
  {
    name: "Marcus Thorne",
    role: "CEO",
    company: "Thrive",
    content:
      "Minimalist, powerful, and effective. The motion design and attention to detail they provided is exactly what our high-growth team needed.",
    logo: "/brands/thrive.png",
  },
  {
    name: "Aisha Vance",
    role: "Head of Talent",
    company: "AP Talent",
    content:
      "Their ability to humanize complex talent solutions through design is remarkable. The new identity has significantly boosted our engagement.",
    logo: "/brands/ap_talent.png",
  },
  {
    name: "Priya Sharma",
    role: "Creative Lead",
    company: "Pickleberry",
    content:
      "Capturing the soul of a homegrown brand while giving it a world-class edge is a tough balance. Printdash nailed it perfectly.",
    logo: "/brands/pickleberry.png",
  },
  {
    name: "Thomas Wright",
    role: "Global Strategy",
    company: "Healthcare 24hr",
    content:
      "The most professional and creative team we've worked with. Their cinematic approach to digital storytelling is truly unique.",
    logo: "/brands/healthcare_24hr.png",
  },
];
