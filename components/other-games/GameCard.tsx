import Link from "next/link";
import Image from "next/image";
import type { GameCardData } from "@/config/types/game";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
export function GameCard({ game }: { game: GameCardData }) {
  return (
    <Link
      href={game.url}
      prefetch={false}
      aria-label={`Play ${game.name}`}
      className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
        <CardHeader className="p-0">
          <Image
            src={game.image}
            alt={`${game.name} preview`}
            width={640}
            height={360}
            className="aspect-video w-full object-cover"
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-5">
          <CardTitle>{game.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{game.shortDesc}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
