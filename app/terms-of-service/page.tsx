import { InformationPage } from "@/components/templates/InformationPage";
import { siteConfig } from "@/config/site.config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  `Terms | ${siteConfig.metadata.name}`,
  "Terms for using this site and its games.",
  "/terms-of-service/",
);
export default function Terms() {
  return (
    <InformationPage title="Terms of service">
      {siteConfig.terms.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </InformationPage>
  );
}
