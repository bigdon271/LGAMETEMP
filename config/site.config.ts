import type { SiteConfig } from "./types/site";

export const siteConfig: SiteConfig = {
  metadata: {
    name: "Skate 3 Browser",
    url: process.env.SITE_URL || "https://skate3-browser.com",
    description: "Play skating games online. Try the Skate 3 browser fan project, read controls and guides, and discover more skateboard games.",
    email: "support@skate3-browser.com",
    author: "Skate 3 Browser",
  },
  mainGameSlug: "skate-3-browser",
  subGameSlugs: ["street-skater-city", "tap-tricks", "moxriders", "skate-the-cradle", "sk8-bit"],
  theme: "minimal",
  appearance: "dark",
  indexable: process.env.SITE_INDEXABLE === "true",
  images: {
    logo: "/assets/skate3-browser/logo.svg",
    favicon: "/assets/skate3-browser/logo.svg",
    ogImage: "/assets/skate3-browser/skate-3-browser.svg",
  },
  about: "Skate 3 Browser collects browser-based skateboarding games in one simple place. Start with the Skate 3 fan project on the homepage or try a different skating game, each with its own player and control guide. The games are served by their original providers, and controls and availability can vary by browser.",
  privacy: "This website is a static game directory. The hosting service may process technical request data. When you start an embedded game, that third-party provider receives your browser request and may store data according to its own settings. This site does not currently use account sign-in, a payment processor, or first-party analytics cookies. Questions: support@skate3-browser.com.",
  terms: "This website supplies links and embedded players for independently hosted browser games. Game availability, saved progress and device compatibility depend on the individual provider. Do not rely on an embedded game to preserve unsaved progress. For site questions, contact support@skate3-browser.com.",
  legalReviewed: true,
  footer: { copyright: "© {year} {siteName}" },
};
