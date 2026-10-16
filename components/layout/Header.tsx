import Link from "next/link";
import Image from "next/image";
import { catalog } from "@/config/runtime";
import { siteConfig } from "@/config/site.config";
import { getThemeClasses } from "@/config/themes/presets";
import { layout } from "@/config/layout";

export function Header() {
  if (!layout.header.isVisible) return null;
  const theme = getThemeClasses(siteConfig.theme);
  return (
    <header className={`border-b ${theme.header.bg} ${theme.header.text}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:block focus:p-3"
      >
        Skip to content
      </a>
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-bold">
          <Image src={siteConfig.images.logo} alt="" width={40} height={40} />
          <span className="text-lg">{siteConfig.metadata.name}</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap gap-4 text-sm"
        >
          <Link href="/">Home</Link>
          {catalog.getRelatedGames(catalog.mainGame.slug).length > 0 && (
            <Link href="/#other-games">Games</Link>
          )}
          <Link href="/about/">About</Link>
        </nav>
      </div>
    </header>
  );
}
