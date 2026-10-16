import { InformationPage } from "@/components/templates/InformationPage";
import { siteConfig } from "@/config/site.config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  `Contact | ${siteConfig.metadata.name}`,
  "Contact the site operator with questions or feedback.",
  "/contact/",
);
export default function Contact() {
  return (
    <InformationPage title="Contact">
      {siteConfig.metadata.email ? (
        <p>
          For questions or feedback, email{" "}
          <a className="underline" href={`mailto:${siteConfig.metadata.email}`}>
            {siteConfig.metadata.email}
          </a>
          .
        </p>
      ) : (
        <p>This demonstration site does not have a contact address yet.</p>
      )}
    </InformationPage>
  );
}
