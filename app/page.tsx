import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { SelectedWork } from "@/components/SelectedWork";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
