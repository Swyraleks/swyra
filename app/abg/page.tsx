import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      {/* …Hero + Suche… */}
      <Features />
      <HowItWorks />
      {/* …Rest wie Listings/CTA/FAQ… */}
    </main>
  );
}