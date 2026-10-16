import type { GameLibraryItem } from "@/config/types/game";
import { catalog } from "@/config/runtime";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { generateGameSchema, serializeSchema } from "@/app/schema";

export function GamePageTemplate({ game }: { game: GameLibraryItem }) {
  return (
    <>
      <Header />
      <main
        id="main"
        className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 py-8 md:px-8"
      >
        <section
          aria-labelledby="game-title"
          className="flex flex-col gap-4 text-center"
        >
          <h1
            id="game-title"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            {game.name}
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {game.shortDesc}
          </p>
          <GameSection
            key={game.slug}
            name={game.name}
            src={game.iframeSrc}
            player={game.player}
            sourceUrl={game.sourceUrl}
          />
        </section>
        <section
          id="controls"
          aria-labelledby="controls-title"
          className="mx-auto w-full max-w-4xl scroll-mt-24"
        >
          <h2 id="controls-title" className="mb-4 text-2xl font-semibold">
            Game controls
          </h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            {game.controls.map((control) => (
              <div key={control.action} className="rounded-lg border p-4">
                <dt className="font-medium">{control.action}</dt>
                <dd className="mt-1 text-muted-foreground">{control.input}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-muted-foreground">
            {game.deviceNote}
          </p>
        </section>
        <OtherGames games={catalog.getRelatedGames(game.slug)} />
        <HowToPlay content={game.content.howToPlay} />
        <WhatIs
          content={game.content.whatIs}
          author={game.author}
          sourceUrl={game.sourceUrl}
        />
        <Features content={game.features} />
        <FAQ content={game.content.faq} />
      </main>
      <Footer />
      {!game.demo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeSchema(
              generateGameSchema(game, catalog.gamePath(game.slug)),
            ),
          }}
        />
      )}
    </>
  );
}
