// app/components/HowItWorks.tsx
"use client";
import React from "react";
import type { CSSProperties } from "react";
import { IconRegister, IconListing, IconShieldCheck } from "./icons";

export default function HowItWorks() {
  return (
    <section style={wrap}>
      <div style={container}>
        <span style={eyebrow}>So funktioniert es</span>
        <h2 style={title}>In 3 einfachen Schritten starten</h2>

        <div style={grid}>
          {/* 1 */}
          <div style={card}>
            <div style={iconBubble}><IconRegister /></div>
            <h3 style={cardTitle}>1) Kostenlos registrieren</h3>
            <p style={cardText}>
              Erstelle dein Konto in wenigen Sekunden – ganz ohne versteckte Kosten.
            </p>
          </div>

          {/* 2 */}
          <div style={card}>
            <div style={iconBubble}><IconListing /></div>
            <h3 style={cardTitle}>2) Angebot einstellen</h3>
            <p style={cardText}>
              Fotos hochladen, Preis festlegen und veröffentlichen. Fertig!
            </p>
          </div>

          {/* 3 */}
          <div style={card}>
            <div style={iconBubble}><IconShieldCheck /></div>
            <h3 style={cardTitle}>3) Sicher verkaufen & zahlen</h3>
            <p style={cardText}>
              Bezahlung mit TWINT/Banküberweisung & Käuferschutz – fair und unkompliziert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Styles ===== */

const wrap: CSSProperties = {
  background: "linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)",
  padding: "48px 0",
  borderTop: "1px solid #eef4f8",
};

const container: CSSProperties = {
  width: "min(1120px, 92%)",
  margin: "0 auto",
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
  color: "#081b2b",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
};

const card: CSSProperties = {
  background: "#fff",
  border: "1px solid #e9edf2",
  boxShadow: "0 4px 16px rgba(2,36,89,.06)",
  borderRadius: 14,
  padding: 24,
};

const iconBubble: CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 12,
  display: "grid",
  placeItems: "center",
  background: "#e7f3ff",
  border: "1px solid #d8eaff",
  marginBottom: 12,
};

const cardTitle: CSSProperties = {
  fontSize: 20,
  fontWeight: 800,
  margin: "0 0 6px",
};

const cardText: CSSProperties = {
  fontSize: 15,
  color: "#405e61",
  margin: 0,
};

/* Mobile Fallback */
if (typeof window !== "undefined") {
  const mq = window.matchMedia("(max-width: 860px)");
  const apply = () => {
    (grid as any).gridTemplateColumns = mq.matches ? "1fr" : "repeat(3, 1fr)";
  };
  apply();
  mq.addEventListener?.("change", apply);
}