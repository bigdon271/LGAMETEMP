import type { GameLibraryItem } from "../types/game";

/** Replace these local examples with games you have tested and may embed. */
export const gameLibrary: Record<string, GameLibraryItem> = {
  "pointer-demo": {
    slug: "pointer-demo",
    name: "Pointer Demo",
    published: true,
    demo: true,
    shortDesc:
      "A local interactive sample for mouse, touch and player controls.",
    image: "/assets/template/pointer.svg",
    iframeSrc: "/demo/pointer.html",
    seo: {
      title: "Pointer Demo | Game Site Template",
      description:
        "Try the local pointer demo and explore the reusable game page layout.",
    },
    player: {
      width: 16,
      height: 9,
      reloadWarning:
        "Reloading clears the demo counter. Unsaved progress in other games may also be lost.",
    },
    controls: [{ action: "Add a point", input: "Click or tap the target" }],
    deviceNote:
      "Supports mouse, touch and keyboard activation of the target button.",
    relatedSlugs: ["keyboard-demo"],
    features: {
      title: "About this sample",
      items: [
        {
          title: "Runs locally",
          description:
            "The sample loads from this site without an external game service.",
        },
        {
          title: "Starts fresh",
          description:
            "The counter resets when you reload the player. Nothing is saved.",
        },
      ],
    },
    content: {
      whatIs: {
        title: "About Pointer Demo",
        description:
          "This small interactive sample lets you try an embedded player. It is included with the template and is not a third-party game.",
        logo: "/assets/template/pointer.svg",
        logoAlt: "Pointer demo target",
      },
      howToPlay: {
        title: "How to use the demo",
        description:
          "Click or tap the target to add a point. You can also focus the button and press Enter.\n\nUse the controls below the player to reload it or open fullscreen.",
        image: "/assets/template/pointer.svg",
        imageAlt: "A target representing the pointer demo",
      },
      faq: {
        title: "Questions",
        items: [
          {
            id: "save",
            question: "Is the score saved?",
            answer:
              "No. Reloading the player or leaving the page resets the counter.",
          },
          {
            id: "mobile",
            question: "Can I use touch?",
            answer: "Yes. Tap the target inside the player.",
          },
        ],
      },
    },
  },
  "keyboard-demo": {
    slug: "keyboard-demo",
    name: "Keyboard Demo",
    published: true,
    demo: true,
    shortDesc:
      "A second local sample for keyboard focus and independent game pages.",
    image: "/assets/template/keyboard.svg",
    iframeSrc: "/demo/keyboard.html",
    seo: {
      title: "Keyboard Demo | Game Site Template",
      description:
        "Try keyboard input inside an embedded player on its own game page.",
    },
    player: {
      width: 4,
      height: 3,
      reloadWarning: "Reloading resets the key counter.",
    },
    controls: [
      { action: "Focus the player", input: "Click or tap inside the player" },
      {
        action: "Record an input",
        input: "Arrow keys or the on-screen arrow buttons",
      },
    ],
    deviceNote: "Supports a physical keyboard and on-screen buttons.",
    relatedSlugs: ["pointer-demo"],
    content: {
      whatIs: {
        title: "About Keyboard Demo",
        description:
          "This local sample displays the last arrow input and counts inputs. It demonstrates a separate game URL and a different player aspect ratio.",
        logo: "/assets/template/keyboard.svg",
        logoAlt: "Four directional arrows",
      },
      howToPlay: {
        title: "How to use the demo",
        description:
          "Focus the player, then press an arrow key. The last direction and input count appear inside the player.\n\nOn a touch device, use the arrow buttons. Reload to reset the count.",
        image: "/assets/template/keyboard.svg",
        imageAlt: "Keyboard demo directional controls",
      },
      faq: {
        title: "Questions",
        items: [
          {
            id: "focus",
            question: "Why are arrow keys scrolling the page?",
            answer:
              "Click or tap inside the player first so it receives keyboard input.",
          },
          {
            id: "progress",
            question: "Does this demo store data?",
            answer:
              "No. The input count exists only in the current player session.",
          },
        ],
      },
    },
  },
  // Copy a complete entry above to add a game. Set published: false while editing.
};

export function getAllGames() {
  return Object.values(gameLibrary);
}
export function getGameBySlug(slug: string) {
  return gameLibrary[slug];
}
export function getGamesBySlugs(slugs: string[]) {
  return slugs.flatMap((slug) =>
    gameLibrary[slug] ? [gameLibrary[slug]] : [],
  );
}
export function getGameBasicInfo(slug: string) {
  const game = gameLibrary[slug];
  if (!game) return undefined;
  const { name, shortDesc, image, iframeSrc } = game;
  return { slug, name, shortDesc, image, iframeSrc };
}
