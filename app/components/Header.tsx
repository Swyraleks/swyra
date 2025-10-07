"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.bar}>
      {/* Logo links – nur Wortmarke, groß */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/logo.svg"           // <- /public/logo.svg
          alt="Swyra"
          width={180}
          height={68}
          priority
          style={{ height: "auto", width: "auto" }}
        />
      </Link>

      {/* Desktop-Navigation */}
      <nav className="hidden md:flex" style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      {/* Mobile: einfacher Button ohne externe Icons */}
      <button
        aria-label="Menü"
        className="md:hidden"
        onClick={() => setMenuOpen((v) => !v)}
        style={styles.menuBtn}
      >
        ☰
      </button>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Über uns</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </div>
      )}
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    background: "#f9fafb",
    borderBottom: "1px solid #e5e7eb",
  },
  nav: { display: "flex", gap: "24px", fontSize: "15px" },
  menuBtn: {
    background: "none",
    border: "none",
    fontSize: "26px",
    cursor: "pointer",
    lineHeight: 1,
  },
  mobileMenu: {
    position: "absolute",
    top: "72px",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "16px 20px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
};