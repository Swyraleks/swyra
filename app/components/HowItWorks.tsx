// app/components/HowItWorks.tsx
import React from "react";

export default function HowItWorks() {
  return (
    <section style={wrap}>
      <div style={container}>
        <span style={eyebrow}>So funktioniert es</span>
        <h2 style={title}>In 3 einfachen Schritten starten</h2>

        <div style={grid}>
          {/* Schritt 1 */}
          <div style={card}>
            <div style={iconBubble}>📝</div>
            <h3 style={cardTitle}>1) Kostenlos registrieren</h3>
            <p style={cardText}>
              Erstelle dein Konto in wenigen Sekunden – ganz ohne versteckte Kosten.
            </p>
          </div>

          {/* Schritt 2 */}
          <div style={card}>
            <div style={iconBubble}>📸</div>
            <h3 style={cardTitle}>2) Angebot einstellen</h3>
            <p style={cardText}>
              Fotos hochladen, Preis festlegen und veröffentlichen. Fertig!
            </p>
          </div>

          {/* Schritt 3 */}
          <div style={card}>
            <div style={iconBubble}>✅</div>
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

const wrap: React.CSSProperties = {
  background: "linear-gradient(180deg, #ffffff 0%, #f7fbff 100%)",
  padding: "64px 0",
  borderTop: "1px solid #eef4f8",
};

const container: React.CSSProperties = {
  width: "min(1120px, 92%)",
  margin: "0 auto",
};

const eyebrow: React.CSSProperties = {
  display: "inline-block",
  fontSize: 14,
  color: "#0b6bcb",
  background: "#e8f3ff",
  border: "1px solid #d6eaff",
  borderRadius: 999,
  padding: "6px 12px",
  marginBottom: 12,
};

const title: React.CSSProperties = {
  fontSize: 32,
  lineHeight: 1.25,
  fontWeight: 800,
  margin: "0 0 24px",
  color: "#081b2b",
};

const grid: React.CSSProperties = {
  display: "grid",
  // WICHTIG: responsive 1–3 Spalten, ohne Überlauf auf iPhone
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const card: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e9edf2",
  boxShadow: "0 4px 16px rgba(2, 36, 89, 0.06)",
  borderRadius: 14,
  padding: 24,
};

const iconBubble: React.CSSProperties = {
  width: 44,
  height: 44,
  display: "grid",
  placeItems: "center",
  background: "#f6faff",
  border: "1px solid #d8eaff",
  borderRadius: 12,
  fontSize: 22,
  color: "#0b6bcb",
  marginBottom: 12,
};

const cardTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: "#0d1b2a",
  margin: "0 0 6px",
};

const cardText: React.CSSProperties = {
  fontSize: 15,
  color: "#405061",
  margin: 0,
};