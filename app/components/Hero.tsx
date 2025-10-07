// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section style={wrap}>
      <div className="container" style={inner}>
        {/* linke Seite: Titel + Text + Buttons */}
        <div style={left}>
          <h1 style={title}>
            Sicher handeln,<br /> einfach zahlen.
          </h1>

          <p style={lead}>
            Der moderne Marktplatz aus der Schweiz – mit TWINT,
            Banküberweisung oder Kryptowährungen bezahlen. Schnell, fair
            und nutzerfreundlich.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            <a href="/about" className="btn btn-primary">Mehr über Swyra</a>
            <a href="/contact" className="btn btn-secondary">Kontakt</a>
          </div>
        </div>

        {/* rechte Seite: Karte mit Logo + Unterzeile */}
        <div style={right}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "white",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              minHeight: "220px", // Feld bleibt etwas höher
            }}
          >
            <Image
              src="/logo-swyra.svg"      // Logo MIT Zusatztext (im /public Ordner)
              alt="Swyra – Sicher handeln, einfach zahlen"
              width={500}
              height={160}
              style={{ width: "100%", height: "auto", maxWidth: "420px" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== inline styles ===== */
const wrap: React.CSSProperties = {
  padding: "96px 0",
  background: "radial-gradient(1200px 600px at 70% 0%, #eaf3ff 0%, rgba(234,243,255,0) 55%)",
};

const inner: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: 48,
  alignItems: "center",
};

const left: React.CSSProperties = { maxWidth: 600 };
const right: React.CSSProperties = { display: "flex", justifyContent: "center" };

const title: React.CSSProperties = {
  fontSize: "clamp(36px, 6vw, 56px)",
  lineHeight: 1.05,
  margin: "8px 0 12px",
};

const lead: React.CSSProperties = {
  fontSize: 18,
  margin: "4px 0 6px",
};