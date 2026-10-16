import { InformationPage } from "@/components/templates/InformationPage";
import { siteConfig } from "@/config/site.config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  `Privacy | ${siteConfig.metadata.name}`,
  "Information about data use on this site.",
  "/privacy-policy/",
);
export default function Privacy() {
  return (
    <InformationPage title="Privacy policy">
      {siteConfig.privacy.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </InformationPage>
  );
}
