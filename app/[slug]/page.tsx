import { notFound } from "next/navigation";
import { emptyExportSlug } from "@/config/catalog";
import { catalog } from "@/config/runtime";
import { gameMetadata } from "@/lib/metadata";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
export const dynamicParams = false;
export function generateStaticParams() {
  // A single-game site has no subroutes. Next still requires one build parameter;
  // this reserved path renders notFound(), then verify-export removes its files.
  return catalog.subGames.length
    ? catalog.subGames.map((game) => ({ slug: game.slug }))
    : [{ slug: emptyExportSlug }];
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const game = catalog.getSubGame(slug);
  if (!game) notFound();
  return gameMetadata(game, catalog.gamePath(game.slug));
}
export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = catalog.getSubGame(slug);
  if (!game) notFound();
  return <GamePageTemplate game={game} />;
}
