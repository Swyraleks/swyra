import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* CTA-Bereich */}
      <CallToAction />
    </main>
  );
}