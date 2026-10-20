/**
 * Portfolio copy and external URLs.
 *
 * Replace empty strings with real URLs before sharing the site.
 * An empty string is rendered as a label and is not linked, so the
 * page never points at an invented address.
 *
 * Resume: set `urls.resume` to an absolute URL, or to "/resume.pdf"
 * after adding that file to `public/`.
 *
 * Email: `site.email` is the public contact address.
 */

export const site = {
  name: "Rory Schofield",
  role: "Full-Stack Developer · Web · Mobile · SaaS · AI",
  email: "roryschofield@gmail.com",
  title: "Rory Schofield — Full-Stack Developer · Web · Mobile · SaaS · AI",
  description:
    "I'm a full-stack developer focused on building practical software products with modern web, mobile, and AI technologies. I've built and shipped products ranging from AI-powered SaaS applications to mobile apps.",
  hero: "I'm a full-stack developer focused on building practical software products with modern web, mobile, and AI technologies. I've built and shipped products ranging from AI-powered SaaS applications to mobile apps.",
  contactIntro:
    "I'm interested in full-time development opportunities and freelance projects.",
} as const;

export const urls: {
  linkedin: string;
  github: string;
  resume: string;
} = {
  linkedin: "https://www.linkedin.com/in/roryschofield/",
  github: "https://github.com/RorySchof",
  resume: "",
};

export const navigation = [
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  placement: "left" | "right";
  width: number;
  height: number;
  compact?: boolean;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  primaryLink: ProjectLink;
  secondaryLinks: ProjectLink[];
  image?: ProjectImage;
};

export const projects: Project[] = [
  {
    name: "ClientTempo",
    category: "AI SaaS",
    description:
      "ClientTempo is a live AI-powered SaaS toolkit for real-estate agents, covering client replies, showing and open-house notes, listing generation, and real-estate Q&A.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq",
      "Clerk",
      "Redis",
      "Stripe",
      "Mailgun",
      "Vercel",
    ],
    highlights: [
      "Five AI-powered workflows for real-estate professionals",
      "AI processing of forwarded client emails through a Mailgun webhook",
      "Authentication, subscription billing, token purchases, and usage tracking",
      "Redis-backed application data, credit balances, and webhook handling",
    ],
    // Signed-in app: https://app.clienttempo.com/dashboard
    primaryLink: {
      label: "Website",
      href: "https://www.clienttempo.com/",
    },
    secondaryLinks: [
      { label: "GitHub", href: "https://github.com/RorySchof/ClientTempo" },
    ],
    image: {
      src: "/work/clienttempo-dashboard.png",
      alt: "ClientTempo workspace with tools for client replies, showing notes, open-house notes, listing generation, and real-estate questions.",
      placement: "right",
      width: 2464,
      height: 1750,
    },
  },
  {
    name: "Sorin Study",
    category: "Mobile App",
    description:
      "A study-tracking app for iOS, built with React Native and Expo, with local data storage, account-based cloud sync, and native iOS features.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "MobX-State-Tree",
      "AsyncStorage",
      "EAS",
    ],
    highlights: [
      "Account management and cloud synchronization with Supabase",
      "Guest-to-account migration with local and cloud data reconciliation",
      "Study reminders through native iOS notifications",
      "Published on the Apple App Store using Expo/EAS",
    ],
    primaryLink: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/sorin-study/id6772776460",
    },
    secondaryLinks: [
      { label: "GitHub", href: "https://github.com/RorySchof/SorinHabit" },
    ],
    image: {
      src: "/work/sorin-home.png",
      alt: "Sorin Study on iPhone, showing a daily check-in with study sessions and progress.",
      placement: "left",
      width: 1290,
      height: 2796,
    },
  },
  {
    name: "Roof Inspector",
    category: "Computer Vision",
    description:
      "A computer vision prototype for reviewing roof images for potential signs of repair needs, adapting image-classification techniques toward a property-inspection use case.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
    highlights: [
      "Prototype for reviewing roof images for possible repair needs",
      "Image-classification techniques applied to a property-inspection use case",
    ],
    primaryLink: {
      label: "Try Roof Inspector",
      href: "https://roof-inspector.onrender.com/",
    },
    secondaryLinks: [
      { label: "GitHub", href: "https://github.com/RorySchof/roof-inspector" },
    ],
    image: {
      src: "/work/roof-inspector.png",
      alt: "Roof Inspector screening a damaged roof photo and reporting potential repair needed, with 99.8% confidence.",
      placement: "right",
      width: 694,
      height: 966,
      compact: true,
    },
  },
];

export const technologyGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "PostgreSQL",
      "Next.js API Routes",
      "FastAPI",
      "Supabase",
      "Redis",
    ],
  },
  {
    title: "Tools & Integrations",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Stripe",
      "Mailgun",
      "Expo",
      "EAS",
      "Docker",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "LLM APIs",
      "PyTorch",
      "fast.ai",
      "Computer Vision",
      "Machine Learning",
    ],
  },
] as const;

export function projectLinkLabel(projectName: string, label: string) {
  switch (label) {
    case "Live App":
      return `${projectName} live app`;
    case "Try Roof Inspector":
      return "Try the Roof Inspector demo";
    case "GitHub":
      return `${projectName} on GitHub`;
    case "Live Project":
      return `${projectName} live project`;
    case "App Store":
      return `${projectName} on the App Store`;
    case "Project Landing Page":
      return `${projectName} landing page`;
    case "View Project":
      return `View the ${projectName} project`;
    default:
      return `${projectName}: ${label}`;
  }
}
