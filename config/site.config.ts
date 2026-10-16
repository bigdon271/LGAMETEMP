import type { SiteConfig } from "./types/site";

/** Build-time settings. See CONFIG_GUIDE.md before publishing a real site. */
export const siteConfig: SiteConfig = {
  metadata: {
    name: "Game Site Template",
    url: process.env.SITE_URL || "http://localhost:3000",
    description:
      "A reusable home for browser games, with independent game pages and clear controls.",
    email: "",
    author: "Game Site Template",
  },
  mainGameSlug: "pointer-demo",
  subGameSlugs: ["keyboard-demo"],
  theme: "warm",
  appearance: "light",
  indexable: process.env.SITE_INDEXABLE === "true",
  images: {
    logo: "/assets/template/logo.svg",
    favicon: "/assets/template/logo.svg",
    ogImage: "/assets/template/pointer.svg",
  },
  about:
    "This is a browser game site template with local interactive samples. Each game has its own player, controls and information page.",
  privacy:
    "The included local demos do not use cookies, analytics or persistent storage. A hosting provider may process access logs. Any third-party games added to this site may have their own data practices; review their policies before playing.",
  terms:
    "The included pages are demonstration content. Game availability and controls may vary. When adding third-party games, their authors retain their rights and their own terms may apply.",
  legalReviewed: false,
  footer: { copyright: "© {year} {siteName}" },
};
