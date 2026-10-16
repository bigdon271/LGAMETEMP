import type { GameDetailContent } from "@/config/types/game";
/** Native disclosure keeps every answer in the initial HTML and works without JS. */
export function FAQ({ content }: { content: GameDetailContent["faq"] }) {
  if (!content.items.length) return null;
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-semibold">{content.title}</h2>
      <div className="divide-y rounded-lg border px-5">
        {content.items.map((item) => (
          <details key={item.id} className="py-4">
            <summary className="cursor-pointer font-medium">
              {item.question}
            </summary>
            <p className="pt-3 leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
