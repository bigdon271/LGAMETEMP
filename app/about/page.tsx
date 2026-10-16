import { InformationPage } from "@/components/templates/InformationPage";
import { siteConfig } from "@/config/site.config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  `About | ${siteConfig.metadata.name}`,
  siteConfig.metadata.description,
  "/about/",
);
export default function About() {
  return (
    <InformationPage title={`About ${siteConfig.metadata.name}`}>
      {siteConfig.about.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </InformationPage>
  );
}
