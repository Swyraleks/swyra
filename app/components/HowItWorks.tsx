// app/components/HowItWorks.tsx
"use client";
import React from "react";
import type { CSSProperties } from "react";
import { IconRegister, IconListing, IconShieldCheck } from "./icons";

const NAVY = "#0b1a2b";
const BUBBLE_BG = "#eef6ff";
const BUBBLE_BORDER = "#d8e7ff";

type Step = { icon: React.ReactNode; title: string; text: string };

const STEPS: Step[] = [
  {
    icon: <IconRegister />,
    title: "1) Kostenlos registrieren",
    text:
      "Erstelle dein Konto in wenigen Sekunden – ganz ohne versteckte Kosten.",
  },
  {
    icon: <IconListing />,
    title: "2) Angebot einstellen",
    text:
      "Fotos hochladen, Preis festlegen und veröffentlichen. Fertig!",
  },
  {
    icon: <IconShieldCheck />,
    title: "3) Sicher verkaufen & zahlen",
    text:
      "Bezahlung mit TWINT/Banküberweisung & Käuferschutz – fair und unkompliziert.",
  },
];

export default function HowItWorks() {
  return (
    <section style={wrap}>
      <style>{`
        @media (max-width: 860px){
          .steps-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={container}>
        <span style={eyebrow}>So funktioniert es</span>
        <h2 style={title}>In 3 einfachen Schritten starten</h2>

        <div className="steps-grid" style={grid}>
          {STEPS.map((s, i) => (
            <article key={i} style={card}>
              <div style={iconBubble}>
                <span style={iconInner}>{s.icon}</span>
              </div>
              <h3 style={cardTitle}>{s.title}</h3>
              <p style={cardText}>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Inline Styles ===== */
const wrap: CSSProperties = {
  background:
    "linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)",
  padding: "56px 0 24px",
  borderTop: "1px solid #eef4f8",
};

const container: CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 16px",
};

const eyebrow: CSSProperties = {
  display: "inline-block",
  fontSize: 14,
  color: "#0b6bcb",
  background: "#e8f3ff",
  border: "1px solid #d6eaff",
  borderRadius: 999,
  padding: "6px 12px",
  marginBottom: 12,
};

const title: CSSProperties = {
  fontSize: 32,
  lineHeight: 1.25,
  fontWeight: 800,
  margin: "0 0 24px",
  color: NAVY,
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
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

const iconInner: CSSProperties = { color: NAVY, display: "grid", placeItems: "center" };

const cardTitle: CSSProperties = { fontSize: 20, fontWeight: 800, margin: "8px 0 6px", color: NAVY };

const cardText: CSSProperties = { fontSize: 16, lineHeight: 1.55, color: "#455468", margin: 0 };