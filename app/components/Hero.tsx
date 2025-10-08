// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section style={wrap}>
      <div style={inner}>
        {/* Zentrale Karte mit Logo */}
        <div style={card}>
          <Image
            src="/logo-swyra.svg"        // falls du PNG/JPG nutzen willst: z.B. "/logo-swyra.png"
            alt="Swyra Logo"
            width={420}
            height={160}
            priority
            style={{ width: "100%", height: "auto", maxWidth: 420 }}
          />
          {/* Wenn du doch eine kleine Unterzeile möchtest, diese Zeile auskommentieren:
          <p style={tagline}>Sicher handeln, einfach zahlen.</p>
          */}
        </div>
      </div>
    </section>
  );
}

/* ===== Inline-Styles (responsive & zentriert) ===== */
const wrap: React.CSSProperties = {
  // sanfter Verlauf wie zuvor
  background:
    "radial-gradient(1200px 600px at 70% 0%, #eaf3ff 0%, rgba(234,243,255,0) 55%)",
};

const inner: React.CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "72px 20px",      // mobile freundlicher Abstand
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 360,
};

const card: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  borderRadius: 16,
  padding: "28px 32px",
  boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
  width: "100%",
  maxWidth: 560,            // Karte wird nicht zu breit
  minHeight: 220,
};

const tagline: React.CSSProperties = {
  marginTop: 16,
  fontSize: "clamp(14px, 2.4vw, 18px)",
  lineHeight: 1.4,
  color: "#4b5563",
  textAlign: "center",
};