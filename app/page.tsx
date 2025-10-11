// app/page.tsx
import Hero from "./components/Hero";
import Features from "./components/Features";
import ListingGrid from "./components/ListingGrid";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";         // <— falls deine Datei „FAQs.tsx“ heißt, dann beide auf FAQs anpassen
import CallToAction from "./components/CallToAction";

export default function Page() {
  return (
    <main>
      {/* Hero-Bereich */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Neue Angebote */}
      <ListingGrid />

      {/* So funktioniert’s */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action unten */}
      <CallToAction />
    </main>
  );
}