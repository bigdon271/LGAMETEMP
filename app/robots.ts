import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { absoluteUrl } from "@/lib/metadata";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  // Allow the HTML to be crawled so the preview's noindex can be read.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteConfig.indexable ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
