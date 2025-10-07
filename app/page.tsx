// app/page.tsx
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ"; // 👈 FAQ importiert
import ListingGrid from "./components/ListingGrid";

export default function Home() {
  return (
    <main>
      {/* Hero-Bereich */}
      <Hero />

      {/* Features-Bereich */}
      <Features />

{/* Neue Angebots-Sektion */}
      <ListingGrid /> {/*
      
      {/* So funktioniert’s */}
      <HowItWorks />

      {/* FAQ-Bereich */}
      <FAQ />

      {/* Call-To-Action unten */}
      <CallToAction />
    </main>
  );
}