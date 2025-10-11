// app/components/Features.tsx
import React from "react";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: "🔒",
    title: "Sicher zahlen",
    text: "TWINT, Banküberweisung & Krypto mit Käuferschutz-Konzept. Sicherheit an erster Stelle.",
  },
  {
    icon: "⚡",
    title: "Einfach handeln",
    text: "In wenigen Klicks kaufen & verkaufen – mobil & am Desktop. Schnell und unkompliziert.",
  },
  {
    icon: "CH",
    title: "Lokal & vertrauenswürdig",
    text: "Kundenfreundlich, fair und zuverlässig – von hier, für dich.",
  },
];

export default function Features() {
  return (
    <section style={wrap}>
      <div className="container" style={grid}>
        {FEATURES.map((f, i) => (
          <article key={i} style={card}>
            <div style={iconBubble}>{f.icon}</div>
            <h3 style={cardTitle}>{f.title}</h3>
            <p style={{ marginTop: 8, color: "var(--muted)" }}>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ===== Styles ===== */

const wrap: React.CSSProperties = {
  padding: "28px 0 64px",
};

const grid: React.CSSProperties = {
  display: "grid",
  // WICHTIG: macht die Karten mobil automatisch 1 Spalte, Tablet 2, Desktop 3 …
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 24,
  alignItems: "stretch",
};

const card: React.CSSProperties = {
  padding: "22px 22px",
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 4px 16px rgba(2, 36, 89, 0.06)",
  transition: "transform .18s ease, box-shadow .18s ease",
  border: "1px solid #e9edf2",
};

const iconBubble: React.CSSProperties = {
  width: 48,
  height: 48,
  display: "grid",
  placeItems: "center",
  background: "#f6faff",
  border: "1px solid #bdeafe",
  borderRadius: 12,
  fontSize: 24,
  marginBottom: 12,
};

const cardTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  margin: 0,
};