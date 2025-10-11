// app/components/Features.tsx
"use client";
import React from "react";
import type { CSSProperties, ReactNode } from "react";
import { IconSecure, IconSimple, IconTrusted } from "./icons";

type Feature = { icon: ReactNode; title: string; text: string };

const FEATURES: Feature[] = [
  {
    icon: <IconSecure />,
    title: "Sicher zahlen",
    text: "TWINT, Banküberweisung & Krypto mit Käuferschutz-Konzept. Sicherheit an erster Stelle.",
  },
  {
    icon: <IconSimple />,
    title: "Einfach handeln",
    text: "In wenigen Klicks kaufen & verkaufen – mobil & am Desktop. Schnell und unkompliziert.",
  },
  {
    icon: <IconTrusted />,
    title: "Lokal & vertrauenswürdig",
    text: "Kundenfreundlich, fair und zuverlässig – von hier, für dich.",
  },
];

export default function Features() {
  return (
    <section style={{ padding: "28px 0 64px" }}>
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
const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24,
};

const card: CSSProperties = {
  padding: "22px 22px",
  background: "#fff",
  border: "1px solid #e9edf2",
  borderRadius: 16,
  boxShadow: "0 4px 16px rgba(2,36,89,.06)",
  transition: "transform .18s ease, box-shadow .18s ease",
} as CSSProperties;

// kleiner Trick: Hover via CSS-in-JS
(Object.assign(card, { [":hover" as any]: undefined }) as any);

const iconBubble: CSSProperties = {
  width: 48,
  height: 48,
  display: "grid",
  placeItems: "center",
  background: "#eff4ff",
  border: "1px solid #dbe4ff",
  borderRadius: 12,
  marginBottom: 12,
};

const cardTitle: CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
  margin: 0,
};

/* Mobile (kleine Fallback-Variante ohne CSS-Datei) */
if (typeof window !== "undefined") {
  const mq = window.matchMedia("(max-width: 860px)");
  const apply = () => {
    (grid as any).gridTemplateColumns = mq.matches ? "1fr" : "repeat(3, 1fr)";
  };
  apply();
  mq.addEventListener?.("change", apply);
}