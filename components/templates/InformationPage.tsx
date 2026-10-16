import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export function InformationPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main
        id="main"
        className="container mx-auto min-h-[50vh] max-w-3xl px-4 py-12"
      >
        <h1 className="mb-8 text-3xl font-bold">{title}</h1>
        <div className="flex flex-col gap-5 leading-relaxed text-muted-foreground">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
