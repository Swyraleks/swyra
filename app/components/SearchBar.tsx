// app/components/SearchBar.tsx
"use client";

import React from "react";

export default function SearchBar() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      style={wrap}
    >
      <select aria-label="Kategorie" style={select}>
        <option>Alle Kategorien</option>
        {/* ...deine weiteren Optionen... */}
      </select>

      <input
        aria-label="Suchbegriff"
        placeholder="Suchbegriff eingeben"
        style={input}
      />

      <button type="submit" className="btn btn-primary" style={btn}>
        Suchen
      </button>
    </form>
  );
}

/* ===== Inline Styles ===== */

const wrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "auto 1fr auto", // Select kompakt, Input flexibel, Button kompakt
  gap: 8,
  alignItems: "center",
  padding: 8,
  borderRadius: 999,
  background: "#fff",
  boxShadow: "0 6px 24px rgba(0,0,0,.06)",
  maxWidth: "960px",
  margin: "0 auto",
};

const select: React.CSSProperties = {
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  border: "1px solid #e3e8ef",
  background: "#f7f9fc",
  borderRadius: 999,
  padding: "10px 16px",
  fontSize: 14,
  fontWeight: 600,
  width: 160,                 // << kompakt
  minWidth: 140,
};

const input: React.CSSProperties = {
  border: "1px solid #e3e8ef",
  background: "#f7f9fc",
  borderRadius: 999,
  padding: "12px 16px",
  fontSize: 16,
  width: "100%",              // << nimmt restliche Breite
  minWidth: 0,                // << wichtig, damit Grid schrumpfen darf
};

const btn: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 999,
};

/* --- Mobile Tweaks (ohne CSS-Datei) --- */
if (typeof window !== "undefined") {
  const mq = window.matchMedia("(max-width: 480px)");
  const apply = () => {
    if (mq.matches) {
      // auf sehr kleinen Screens Select noch kompakter
      select.width = 130;
      select.minWidth = 120;
    } else {
      select.width = 160;
      select.minWidth = 140;
    }
  };
  apply();
  mq.addEventListener?.("change", apply);
}