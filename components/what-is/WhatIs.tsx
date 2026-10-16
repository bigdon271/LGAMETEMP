import Image from "next/image";
import type { GameDetailContent } from "@/config/types/game";
export function WhatIs({
  content,
  author,
  sourceUrl,
}: {
  content: GameDetailContent["whatIs"];
  author?: string;
  sourceUrl?: string;
}) {
  return (
    <section
      id="what-is"
      className="grid items-center gap-8 rounded-lg border p-6 md:grid-cols-[160px_1fr]"
    >
      <Image
        src={content.logo}
        alt={content.logoAlt}
        width={160}
        height={160}
        className="mx-auto object-contain"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">{content.title}</h2>
        {content.description.split("\n\n").map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
        {author && <p className="text-sm">Created by {author}</p>}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline underline-offset-4"
          >
            Original project (opens in a new tab)
          </a>
        )}
      </div>
    </section>
  );
}
