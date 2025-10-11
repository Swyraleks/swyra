// app/components/Features.tsx
"use client";
import React from "react";
import type { CSSProperties } from "react";
import { IconLock, IconBolt, IconCH } from "./icons";

const NAVY = "#0b1a2b";
const BUBBLE_BG = "#eef6ff";
const BUBBLE_BORDER = "#d8e7ff";

type Feature = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  {
    icon: <IconLock />,
    title: "Sicher zahlen",
    text:
      "TWINT, Banküberweisung & Krypto mit Käuferschutz-Konzept. Sicherheit an erster Stelle.",
  },
  {
    icon: <IconBolt />,
    title: "Einfach handeln",
    text:
      "In wenigen Klicks kaufen & verkaufen – mobil & am Desktop. Schnell und unkompliziert.",
  },
  {
    icon: <IconCH />,
    title: "Lokal & vertrauenswürdig",
    text:
      "Kundenfreundlich, fair und zuverlässig – von hier, für dich.",
  },
];

export default function Features() {
  return (
    <section style={wrap}>
      {/* kleines CSS für Mobile-Gitter */}
      <style>{`
        @media (max-width: 860px){
          .features-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="container" style={container}>
        <div className="features-grid" style={grid}>
          {FEATURES.map((f, i) => (
            <article key={i} style={card}>
              <div style={iconBubble}>
                <span style={iconInner}>{f.icon}</span>
              </div>
              <h3 style={cardTitle}>{f.title}</h3>
              <p style={cardText}>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Inline Styles ===== */
const wrap: CSSProperties = { padding: "28px 0 64px" };

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 16px",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 24,
};

const card: CSSProperties = {
  background: "#fff",
  border: "1px solid #e9edf2",
  borderRadius: 16,
  padding: 24,
  boxShadow: "0 4px 16px rgba(2,36,89,0.06)",
};

const iconBubble: CSSProperties = {
  width: 48,
  height: 48,
  display: "grid",
  placeItems: "center",
  borderRadius: 12,
  background: BUBBLE_BG,
  border: `1px solid ${BUBBLE_BORDER}`,
  marginBottom: 14,
};

const iconInner: CSSProperties = {
  color: NAVY,
  display: "grid",
  placeItems: "center",
};

const cardTitle: CSSProperties = {
  fontSize: 22,
  fontWeight: 800,
  margin: "8px 0 6px",
  color: NAVY,
};

const cardText: CSSProperties = {
  fontSize: 16,
  lineHeight: 1.55,
  color: "#455468",
  margin: 0,
};