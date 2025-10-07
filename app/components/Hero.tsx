// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* Linke Seite */}
        <div className="hero-left">
          <h1>
            Sicher handeln,<br /> einfach zahlen.
          </h1>

          <p>
            Der moderne Marktplatz aus der Schweiz – mit TWINT,
            Banküberweisung oder Kryptowährungen bezahlen. Schnell, fair
            und nutzerfreundlich.
          </p>

          <div className="btn-row">
            <a href="/about" className="btn btn-primary">Mehr über Swyra</a>
            <a href="/contact" className="btn btn-secondary">Kontakt</a>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="hero-card">
          <div className="hero-card-inner">
            <Image
              src="/logo-swyra.svg"
              alt="Swyra Logo mit Text"
              width={500}
              height={160}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}