import Link from "next/link";
import { InformationPage } from "@/components/templates/InformationPage";
export default function NotFound() {
  return (
    <InformationPage title="Page not found">
      <p>This page is not available.</p>
      <Link href="/" className="underline">
        Back to the main game
      </Link>
    </InformationPage>
  );
}
