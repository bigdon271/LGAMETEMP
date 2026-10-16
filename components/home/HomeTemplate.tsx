import { catalog } from "@/config/runtime";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
export function HomeTemplate() {
  return <GamePageTemplate game={catalog.mainGame} />;
}
