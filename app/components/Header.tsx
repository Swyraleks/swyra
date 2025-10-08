"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        borderBottom: "1px solid #e5e7eb",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
      >
        <Image
          src="/swyra-logo-inline.svg"
          alt="Swyra"
          width={220}
          height={52}
          priority
        />
      </Link>

      {/* Desktop-Navigation */}
      <nav style={{ display: "flex", gap: 20, fontSize: 15 }}>
        <Link href="/">Home</Link>
        <Link href="/about">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      {/* Mobile-Menü (einfacher Button; wenn du willst, ersetze durch Icons) */}
      <button
        aria-label="Menü"
        onClick={() => setMenuOpen((v) => !v)}
        style={{
          marginLeft: 12,
          padding: "6px 10px",
          fontSize: 16,
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          background: "#fff",
          display: "none", // später via CSS/MediaQueries steuern
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile-Dropdown (wird nur gezeigt, wenn menuOpen true ist) */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            right: 16,
            top: 64,
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            boxShadow: "0 8px 24px rgba(0,0,0,.08)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "12px 16px",
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            Über uns
          </Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
        </div>
      )}
    </header>
  );
}