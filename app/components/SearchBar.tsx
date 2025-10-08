// app/components/SearchBar.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<string>("alle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (cat !== "alle") params.set("cat", cat);
    router.push(`/search?${params.toString()}`);
  }

  return (
    <form onSubmit={onSubmit} aria-label="Suche" style={wrap}>
      {/* Kategorien-Auswahl (optional) */}
      <label style={visuallyHidden} htmlFor="sb-cat">Kategorie</label>
      <select
        id="sb-cat"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
        style={select}
      >
        <option value="alle">Alle Kategorien</option>
        <option value="auto">Fahrzeuge</option>
        <option value="elektronik">Elektronik</option>
        <option value="haus">Haus & Wohnen</option>
        <option value="sport">Sport</option>
        <option value="mode">Kleidung & Accessoires</option>
      </select>

      {/* Eingabefeld */}
      <label style={visuallyHidden} htmlFor="sb-q">Suchbegriff eingeben</label>
      <input
        id="sb-q"
        type="search"
        inputMode="search"
        placeholder="Suchbegriff eingeben"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={input}
      />

      {/* Button */}
      <button type="submit" style={button} aria-label="Suchen">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={{ marginLeft: 8 }}>Suchen</span>
      </button>
    </form>
  );
}

/* ===== Styles (inline, kompatibel mit deinem Projekt) ===== */
const wrap: React.CSSProperties = {
  maxWidth: 1100,
  width: "100%",
  margin: "12px auto 0",
  padding: 6,
  display: "flex",
  alignItems: "center",
  gap: 8,
  background: "#fff",
  border: "1px solid #e6e7eb",
  borderRadius: 9999,
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
};

const select: React.CSSProperties = {
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  border: "1px solid transparent",
  background: "#f5f6fb",
  padding: "10px 14px",
  borderRadius: 9999,
  fontSize: 14,
  color: "#0f2940",
};

const input: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  border: "none",
  outline: "none",
  fontSize: 16,
  padding: "10px 12px",
  background: "transparent",
  color: "#0f2940",
};

const button: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  padding: "10px 14px",
  borderRadius: 9999,
  background: "#1363df",
  color: "#fff",
  fontWeight: 600,
};

const visuallyHidden: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  whiteSpace: "nowrap",
  border: 0,
};