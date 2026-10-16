export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface GameDetailContent {
  whatIs: { title: string; description: string; logo: string; logoAlt: string };
  howToPlay: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  faq: { title: string; items: FAQItem[] };
}

export interface GameBasicInfo {
  slug: string;
  name: string;
  shortDesc: string;
  image: string;
  iframeSrc: string;
}

export interface GameLibraryItem extends GameBasicInfo {
  published: boolean;
  /** Local examples must never be included in an indexable production site. */
  demo?: boolean;
  sourceUrl?: string;
  author?: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  };
  player: {
    width: number;
    height: number;
    allow?: string;
    /** Set only after testing the provider; some games need additional permissions. */
    sandbox?: string;
    reloadWarning: string;
  };
  controls: { action: string; input: string }[];
  deviceNote: string;
  relatedSlugs?: string[];
  features?: { title: string; items: FeatureItem[] };
  content: GameDetailContent;
}

export type MainGameConfig = GameLibraryItem;
export type SubGameConfig = GameLibraryItem;
export interface GameCardData extends GameBasicInfo {
  url: string;
}
