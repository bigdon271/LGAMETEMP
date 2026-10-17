import type { GameLibraryItem } from "../types/game";

/** Skate 3 Browser published game collection. A game is available only on its canonical page. */
export const gameLibrary: Record<string, GameLibraryItem> = {
  "skate-3-browser": {
    "slug": "skate-3-browser",
    "name": "Skate 3 Browser",
    "published": true,
    "demo": false,
    "shortDesc": "Explore a Skate 3 fan browser project, plus controls, setup tips and free skateboarding games.",
    "image": "/assets/skate3-browser/skate-3-browser.svg",
    "iframeSrc": "https://skate.aaddpp.lol/",
    "sourceUrl": "https://skate.aaddpp.lol/",
    "seo": {
      "title": "Skate 3 Browser – Play the Fan Project Online",
      "description": "Explore Skate 3 Browser with a playable fan-project embed, setup guidance, controls, loading tips and more free skateboarding games.",
      "keywords": [
        "skate 3 browser",
        "skate 3 browser game",
        "play skate 3 in browser"
      ],
      "ogImage": "/assets/skate3-browser/skate-3-browser.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen; gamepad",
      "reloadWarning": "Reloading the game frame may restart your session or clear unsaved progress."
    },
    "controls": [
      {
        "action": "Launch the experience",
        "input": "Select Play Skate 3 Browser, then wait for the external game to load."
      },
      {
        "action": "Focus the game",
        "input": "Click inside the game window before using your keyboard or controller."
      },
      {
        "action": "In-game controls",
        "input": "Follow the controls and prompts provided by the fan project itself."
      },
      {
        "action": "Restart the viewer",
        "input": "Use Reload if the game stops responding. Your session may reset."
      }
    ],
    "deviceNote": "The fan project may require a modern desktop browser and game data from your own converted copy. Gameplay compatibility depends on the source site.",
    "relatedSlugs": [
      "moxriders",
      "skate-the-cradle",
      "street-skater-city",
      "tap-tricks",
      "sk8-bit"
    ],
    "features": {
      "title": "Skate 3 Browser Help",
      "items": [
        {
          "title": "A dedicated player",
          "description": "Launch the fan project on the homepage, then use Reload or Fullscreen without navigating away."
        },
        {
          "title": "Loading and setup guidance",
          "description": "Find out what to try if the first load is slow or the embedded frame does not display the game."
        },
        {
          "title": "Explore other skating games",
          "description": "Try quick 2D skaters, creative trick games and 3D skating experiences in separate pages."
        },
        {
          "title": "Direct source access",
          "description": "If the embedded frame does not cooperate with your browser, open the original fan-project page."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is Skate 3 Browser?",
        "description": "Skate 3 Browser is a page for trying an independent browser-based Skate 3 fan project. It is not the original console game running natively inside this website.\n\nThe game experience is provided by the separate project at skate.aaddpp.lol. This site adds a larger player, clear setup notes, a quick troubleshooting guide and more skateboarding games.",
        "logo": "/assets/skate3-browser/skate-3-browser.svg",
        "logoAlt": "Skate 3 Browser illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play Skate 3 Browser",
        "description": "Select Play to load the Skate 3 fan project inside the game panel. The first load may take longer than subsequent visits.\n\nThe upstream project says its game data streams from your own converted copy of Skate 3. Follow any setup prompts displayed by the game rather than assuming that a blank loading screen is complete.\n\nClick the player to focus, then use the controls shown by the project. If the embedded viewer does not load, use Reload or Open Original Project.",
        "image": "/assets/skate3-browser/skate-3-browser.svg",
        "imageAlt": "Skate 3 Browser game guide illustration"
      },
      "faq": {
        "title": "Skate 3 Browser FAQ",
        "items": [
          {
            "id": "official",
            "question": "Is Skate 3 Browser the original console game?",
            "answer": "This page embeds an independent fan project. Its features and setup can differ from the original console release."
          },
          {
            "id": "files",
            "question": "Do I need game files?",
            "answer": "The upstream project says its game data streams from your own converted copy of Skate 3. Follow its on-screen instructions for the version currently available."
          },
          {
            "id": "loading",
            "question": "Why is Skate 3 Browser stuck loading?",
            "answer": "The first load can take time. Try a current desktop browser, allow the page to finish loading, then use Reload or Open Original Project if needed."
          },
          {
            "id": "mobile",
            "question": "Does Skate 3 Browser work on mobile?",
            "answer": "The website layout fits small screens, but the upstream project's mobile controls and compatibility are not guaranteed. A desktop browser is the safer starting point."
          },
          {
            "id": "controller",
            "question": "Can I use a controller?",
            "answer": "Controller behavior depends on the upstream build and browser permissions. Check the in-game prompts and click the game frame to focus it."
          },
          {
            "id": "multiplayer",
            "question": "Is multiplayer available?",
            "answer": "This site does not operate game servers. Check the current fan project for any available online features."
          }
        ]
      }
    }
  },
  "street-skater-city": {
    "slug": "street-skater-city",
    "name": "Street Skater - City",
    "published": true,
    "demo": false,
    "shortDesc": "A colorful score-chasing skater where every tap changes your next trick.",
    "image": "/assets/skate3-browser/street-skater-city.svg",
    "iframeSrc": "https://html-classic.itch.zone/html/243793/index.html",
    "sourceUrl": "https://smashingpixels.itch.io/street-skater",
    "author": "Smashing Pixels",
    "seo": {
      "title": "Street Skater - City – Play Free Online | Skate 3 Browser",
      "description": "Play Street Skater - City in your browser. A colorful score-chasing skater where every tap changes your next trick. See controls, tips and more skateboard games.",
      "ogImage": "/assets/skate3-browser/street-skater-city.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen; gamepad",
      "reloadWarning": "Reloading the game frame may restart your session or clear unsaved progress."
    },
    "controls": [
      {
        "action": "Ollie",
        "input": "Tap or click once"
      },
      {
        "action": "Kickflip",
        "input": "Tap or click twice"
      },
      {
        "action": "Manual",
        "input": "Press and hold"
      }
    ],
    "deviceNote": "For best results, use a desktop browser and click inside the game to focus its controls.",
    "relatedSlugs": [
      "skate-3-browser",
      "tap-tricks",
      "sk8-bit"
    ],
    "features": {
      "title": "Why try Street Skater - City?",
      "items": [
        {
          "title": "Skate-themed play",
          "description": "Try a different approach to skating, tricks and timing without leaving this game collection."
        },
        {
          "title": "One-page guide",
          "description": "Use the controls and tips on this page, then explore other skating games below."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is Street Skater - City?",
        "description": "Street Skater - City is a pick-up-and-play skating score game by Smashing Pixels. Its simple input system puts the focus on clean timing, chaining moves and staying upright.",
        "logo": "/assets/skate3-browser/street-skater-city.svg",
        "logoAlt": "Street Skater - City illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play Street Skater - City",
        "description": "Tap once to ollie over obstacles. Tap twice for a kickflip with a little extra height, or hold to manual and keep your points climbing.\n\nTime your moves around ledges and aim to beat your previous run. Give the WebGL player a moment to start on the first visit.",
        "image": "/assets/skate3-browser/street-skater-city.svg",
        "imageAlt": "Street Skater - City game guide illustration"
      },
      "faq": {
        "title": "Street Skater - City FAQ",
        "items": [
          {
            "id": "controls",
            "question": "How do you jump?",
            "answer": "Tap or click once to ollie; use a double tap for a kickflip."
          },
          {
            "id": "first-load",
            "question": "Why is the game slow to start?",
            "answer": "The original project notes that its WebGL version may take a little while to load for the first time."
          },
          {
            "id": "touch",
            "question": "Can I play with touch controls?",
            "answer": "The creator describes the core moves as tap and hold inputs. Actual support depends on your device and browser."
          }
        ]
      }
    }
  },
  "tap-tricks": {
    "slug": "tap-tricks",
    "name": "Tap Tricks (Jam Version)",
    "published": true,
    "demo": false,
    "shortDesc": "A single-button skateboard challenge built around jumps, momentum and spins.",
    "image": "/assets/skate3-browser/tap-tricks.svg",
    "iframeSrc": "https://html-classic.itch.zone/html/4105752/index.html?v=1782560956",
    "sourceUrl": "https://salmanshh.itch.io/tap-tricks",
    "author": "Salman Shurie",
    "seo": {
      "title": "Tap Tricks (Jam Version) – Play Free Online | Skate 3 Browser",
      "description": "Play Tap Tricks (Jam Version) in your browser. A single-button skateboard challenge built around jumps, momentum and spins. See controls, tips and more skateboard games.",
      "ogImage": "/assets/skate3-browser/tap-tricks.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen; gamepad",
      "reloadWarning": "Reloading the game frame may restart your session or clear unsaved progress."
    },
    "controls": [
      {
        "action": "Jump",
        "input": "Tap or click"
      },
      {
        "action": "Spin / push",
        "input": "Hold the button"
      }
    ],
    "deviceNote": "For best results, use a desktop browser and click inside the game to focus its controls.",
    "relatedSlugs": [
      "skate-3-browser",
      "street-skater-city",
      "sk8-bit"
    ],
    "features": {
      "title": "Why try Tap Tricks (Jam Version)?",
      "items": [
        {
          "title": "Skate-themed play",
          "description": "Try a different approach to skating, tricks and timing without leaving this game collection."
        },
        {
          "title": "One-page guide",
          "description": "Use the controls and tips on this page, then explore other skating games below."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is Tap Tricks (Jam Version)?",
        "description": "Tap Tricks (Jam Version) is an experimental one-button skate-park game created for Ludum Dare 48. Instead of many keys, you use taps and holds to land a clean run.",
        "logo": "/assets/skate3-browser/tap-tricks.svg",
        "logoAlt": "Tap Tricks (Jam Version) illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play Tap Tricks (Jam Version)",
        "description": "Tap or click to jump. Hold your input to spin or build forward momentum as you tackle each obstacle.\n\nThis embedded version is the original jam prototype. The creator also links to a newer version on Poki.",
        "image": "/assets/skate3-browser/tap-tricks.svg",
        "imageAlt": "Tap Tricks (Jam Version) game guide illustration"
      },
      "faq": {
        "title": "Tap Tricks (Jam Version) FAQ",
        "items": [
          {
            "id": "keys",
            "question": "What are the controls?",
            "answer": "Tap to jump, and hold to spin or push forward."
          },
          {
            "id": "version",
            "question": "Is this the newest Tap Tricks?",
            "answer": "No. This is the game-jam version, and the creator links a newer edition from the source page."
          }
        ]
      }
    }
  },
  "moxriders": {
    "slug": "moxriders",
    "name": "MoxRiders",
    "published": true,
    "demo": false,
    "shortDesc": "A fast 3D skateboarding run through rooftops, gaps and tricky courses.",
    "image": "/assets/skate3-browser/moxriders.svg",
    "iframeSrc": "https://html-classic.itch.zone/html/19303454/MoxRide%20%28WebGL%29/index.html?v=1789829129",
    "sourceUrl": "https://moxazza.itch.io/moxriders",
    "author": "Moxazza",
    "seo": {
      "title": "MoxRiders – Play Free Online | Skate 3 Browser",
      "description": "Play MoxRiders in your browser. A fast 3D skateboarding run through rooftops, gaps and tricky courses. See controls, tips and more skateboard games.",
      "ogImage": "/assets/skate3-browser/moxriders.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen; gamepad",
      "reloadWarning": "Reloading the game frame may restart your session or clear unsaved progress."
    },
    "controls": [
      {
        "action": "Perform tricks",
        "input": "Number keys 1, 2, 3, 4"
      },
      {
        "action": "Restart",
        "input": "F"
      },
      {
        "action": "Get back on board",
        "input": "Enter"
      }
    ],
    "deviceNote": "For best results, use a desktop browser and click inside the game to focus its controls.",
    "relatedSlugs": [
      "skate-3-browser",
      "skate-the-cradle",
      "street-skater-city"
    ],
    "features": {
      "title": "Why try MoxRiders?",
      "items": [
        {
          "title": "Skate-themed play",
          "description": "Try a different approach to skating, tricks and timing without leaving this game collection."
        },
        {
          "title": "One-page guide",
          "description": "Use the controls and tips on this page, then explore other skating games below."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is MoxRiders?",
        "description": "MoxRiders is a score-focused 3D skateboarding game by Moxazza. Expect floating courses, gaps and short runs where momentum matters.",
        "logo": "/assets/skate3-browser/moxriders.svg",
        "logoAlt": "MoxRiders illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play MoxRiders",
        "description": "Ride through the course and build your score by stringing together jumps and tricks. Use the number keys 1, 2, 3 and 4 for tricks.\n\nIf you crash, press Enter to get back on the board; press F to restart a run. Give the 3D WebGL build enough time to load.",
        "image": "/assets/skate3-browser/moxriders.svg",
        "imageAlt": "MoxRiders game guide illustration"
      },
      "faq": {
        "title": "MoxRiders FAQ",
        "items": [
          {
            "id": "tricks",
            "question": "Which keys perform tricks?",
            "answer": "The developer lists number keys 1, 2, 3 and 4."
          },
          {
            "id": "restart",
            "question": "How do I restart?",
            "answer": "Press F to restart; Enter returns you to the board after a bail."
          }
        ]
      }
    }
  },
  "skate-the-cradle": {
    "slug": "skate-the-cradle",
    "name": "Skate the Cradle",
    "published": true,
    "demo": false,
    "shortDesc": "A 3D skateboard prototype set around a scanned real-world skatepark.",
    "image": "/assets/skate3-browser/skate-the-cradle.svg",
    "iframeSrc": "https://html-classic.itch.zone/html/1516124/WebGL_Cradle_v0.58/index.html?v=1782549669",
    "sourceUrl": "https://specialtrick.itch.io/realspot",
    "author": "SpecialTrick",
    "seo": {
      "title": "Skate the Cradle – Play Free Online | Skate 3 Browser",
      "description": "Play Skate the Cradle in your browser. A 3D skateboard prototype set around a scanned real-world skatepark. See controls, tips and more skateboard games.",
      "ogImage": "/assets/skate3-browser/skate-the-cradle.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen; gamepad",
      "reloadWarning": "Reloading the game frame may restart your session or clear unsaved progress."
    },
    "controls": [
      {
        "action": "Move",
        "input": "W A S D"
      },
      {
        "action": "Jump",
        "input": "Space"
      },
      {
        "action": "Flip / loop",
        "input": "Left and right / Up and down arrows"
      },
      {
        "action": "Restart",
        "input": "R"
      }
    ],
    "deviceNote": "For best results, use a desktop browser and click inside the game to focus its controls.",
    "relatedSlugs": [
      "skate-3-browser",
      "moxriders",
      "sk8-bit"
    ],
    "features": {
      "title": "Why try Skate the Cradle?",
      "items": [
        {
          "title": "Skate-themed play",
          "description": "Try a different approach to skating, tricks and timing without leaving this game collection."
        },
        {
          "title": "One-page guide",
          "description": "Use the controls and tips on this page, then explore other skating games below."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is Skate the Cradle?",
        "description": "Skate the Cradle is a physics-based skateboarding prototype by SpecialTrick, using a laser-scanned representation of the Cradle Skatepark in Austria.",
        "logo": "/assets/skate3-browser/skate-the-cradle.svg",
        "logoAlt": "Skate the Cradle illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play Skate the Cradle",
        "description": "Move with W, A, S and D, and use Space to jump. Left and right arrow keys control flips; up and down arrows are used for loops.\n\nPress R to restart. This is a prototype built around a scan of the real Cradle skatepark rather than a finished commercial game.",
        "image": "/assets/skate3-browser/skate-the-cradle.svg",
        "imageAlt": "Skate the Cradle game guide illustration"
      },
      "faq": {
        "title": "Skate the Cradle FAQ",
        "items": [
          {
            "id": "move",
            "question": "How do I move and jump?",
            "answer": "Use WASD to move and Space to jump."
          },
          {
            "id": "prototype",
            "question": "Is the skatepark finished?",
            "answer": "The creator describes this version as a work-in-progress prototype."
          }
        ]
      }
    }
  },
  "sk8-bit": {
    "slug": "sk8-bit",
    "name": "SK8-BIT",
    "published": true,
    "demo": false,
    "shortDesc": "A retro-style skateboard game with Challenge and Freeskate modes.",
    "image": "/assets/skate3-browser/sk8-bit.svg",
    "iframeSrc": "https://html-classic.itch.zone/html/13110762/web/index.html?v=1782546705",
    "sourceUrl": "https://dh13.itch.io/sk8-bit",
    "author": "DH13",
    "seo": {
      "title": "SK8-BIT – Play Free Online | Skate 3 Browser",
      "description": "Play SK8-BIT in your browser. A retro-style skateboard game with Challenge and Freeskate modes. See controls, tips and more skateboard games.",
      "ogImage": "/assets/skate3-browser/sk8-bit.svg"
    },
    "player": {
      "width": 16,
      "height": 9,
      "allow": "fullscreen",
      "reloadWarning": "Reloading restarts the embedded SK8-BIT session and may reset progress."
    },
    "controls": [
      {
        "action": "Move",
        "input": "Arrow keys"
      },
      {
        "action": "Button A",
        "input": "Z"
      },
      {
        "action": "Button B",
        "input": "X"
      }
    ],
    "deviceNote": "For best results, use a desktop browser and click inside the game to focus its controls.",
    "relatedSlugs": [
      "skate-3-browser",
      "tap-tricks",
      "street-skater-city"
    ],
    "features": {
      "title": "Why try SK8-BIT?",
      "items": [
        {
          "title": "Skate-themed play",
          "description": "Try a different approach to skating, tricks and timing without leaving this game collection."
        },
        {
          "title": "One-page guide",
          "description": "Use the controls and tips on this page, then explore other skating games below."
        }
      ]
    },
    "content": {
      "whatIs": {
        "title": "What is SK8-BIT?",
        "description": "SK8-BIT is a tiny retro skateboard game by DH13 with both Challenge and Freeskate modes. Its compact controls and pixel style make it a change of pace from the 3D games.",
        "logo": "/assets/skate3-browser/sk8-bit.svg",
        "logoAlt": "SK8-BIT illustrated cover"
      },
      "howToPlay": {
        "title": "How to Play SK8-BIT",
        "description": "Use the arrow keys as the directional pad and Z/X as the A/B buttons.\n\nTry Challenge for short timing tasks or Freeskate to practice ollies, flip tricks, grinds and manuals.",
        "image": "/assets/skate3-browser/sk8-bit.svg",
        "imageAlt": "SK8-BIT game guide illustration"
      },
      "faq": {
        "title": "SK8-BIT FAQ",
        "items": [
          {
            "id": "modes",
            "question": "What modes are available?",
            "answer": "There are two modes: Challenge and Freeskate."
          },
          {
            "id": "keyboard",
            "question": "What are the keyboard controls?",
            "answer": "Use the arrow keys for direction, Z for A and X for B."
          }
        ]
      }
    }
  }
};

export function getAllGames() { return Object.values(gameLibrary); }
export function getGameBySlug(slug: string) { return gameLibrary[slug]; }
export function getGamesBySlugs(slugs: string[]) { return slugs.flatMap(slug => gameLibrary[slug] ? [gameLibrary[slug]] : []); }
export function getGameBasicInfo(slug: string) {
  const game=gameLibrary[slug];
  if (!game) return undefined;
  const { name, shortDesc, image, iframeSrc }=game;
  return { slug, name, shortDesc, image, iframeSrc };
}
