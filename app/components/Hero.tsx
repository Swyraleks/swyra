// app/components/Hero.tsx
"use client";

import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section
      style={{
        padding: "60px 24px",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #f9fbff, #eef3f9)",
      }}
    >
      {/* Hauptbereich */}
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Titel */}
        <h1
          style={{
            fontSize: "2.4rem",
            fontWeight: 700,
            color: "#0f2940",
            marginBottom: 12,
          }}
        >
          Sicher handeln, einfach zahlen.
        </h1>

        {/* Untertitel */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "#55697c",
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Kaufe und verkaufe einfach auf Swyra – mit TWINT, Banküberweisung oder
          Kryptowährung. Schnell, fair und sicher.
        </p>

        {/* Suchleiste – zentral im Hero */}
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <SearchBar />
        </div>
      </div>
    </section>
  );
}