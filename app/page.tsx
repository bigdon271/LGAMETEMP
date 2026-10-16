import { HomeTemplate } from "@/components/home/HomeTemplate";
import { catalog } from "@/config/runtime";
import { gameMetadata } from "@/lib/metadata";
export const metadata = gameMetadata(catalog.mainGame, "/");
export default function Page() {
  return <HomeTemplate />;
}
