import type { GameLibraryItem } from "@/config/types/game";
export function Features({
  content,
}: {
  content: GameLibraryItem["features"];
}) {
  if (!content?.items.length) return null;
  return (
    <section id="features">
      <h2 className="mb-6 text-2xl font-semibold">{content.title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {content.items.map((feature) => (
          <article key={feature.title} className="rounded-lg bg-muted p-6">
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
