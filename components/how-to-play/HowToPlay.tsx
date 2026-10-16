import Image from "next/image";
import type { GameDetailContent } from "@/config/types/game";
export function HowToPlay({
  content,
}: {
  content: GameDetailContent["howToPlay"];
}) {
  return (
    <section id="how-to-play" className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-semibold">{content.title}</h2>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
          {content.description.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <Image
          src={content.image}
          alt={content.imageAlt}
          width={640}
          height={360}
          className="aspect-video w-full rounded-lg object-contain"
        />
      </div>
    </section>
  );
}
