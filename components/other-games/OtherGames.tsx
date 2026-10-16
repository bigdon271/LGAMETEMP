import type { GameCardData } from "@/config/types/game";
import { GameCard } from "./GameCard";
export function OtherGames({ games }: { games: GameCardData[] }) {
  if (!games.length) return null;
  return (
    <section
      id="other-games"
      aria-labelledby="related-title"
      className="scroll-mt-24"
    >
      <h2 id="related-title" className="mb-6 text-2xl font-semibold">
        Related games
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
