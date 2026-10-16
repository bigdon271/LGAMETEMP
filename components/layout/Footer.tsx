import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { getCopyrightText, getFooterGameLinks } from "@/config/runtime";
import { getThemeClasses } from "@/config/themes/presets";
import { layout } from "@/config/layout";
export function Footer() {
  if (!layout.footer.isVisible) return null;
  const theme = getThemeClasses(siteConfig.theme);
  return (
    <footer
      className={`mt-12 border-t ${theme.footer.bg} ${theme.footer.text}`}
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-semibold">{siteConfig.metadata.name}</h2>
            <p className="max-w-lg text-sm text-muted-foreground">
              {siteConfig.metadata.description}
            </p>
          </div>
          <nav aria-label="Games">
            <h2 className="mb-3 font-semibold">Games</h2>
            <ul className="flex flex-wrap gap-4 text-sm">
              {getFooterGameLinks().map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-sm">
          <p>{getCopyrightText()}</p>
          <nav aria-label="Site information" className="flex flex-wrap gap-4">
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy-policy/">Privacy</Link>
            <Link href="/terms-of-service/">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
