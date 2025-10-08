"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
      {/* 🟦 Logo (links) */}
      <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <Image
          src="/swyra-logo-inline.svg"  // <- dein Logo aus dem public-Ordner
          alt="Swyra"
          width={180}
          height={44}
          priority
        />
      </Link>

      {/* 🟩 Navigation (nur Desktop sichtbar) */}
      <nav className="desktop-nav" style={{ display: "flex", gap: 20, fontSize: 15 }}>
        <Link href="/">Home</Link>
        <Link href="/about">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      {/* 🟨 Mobile „Anmelden“-Button */}
      <div className="mobile-auth">
        <Link href="/login" className="btn btn-primary" style={{ padding: "10px 14px" }}>
          Anmelden
        </Link>
      </div>
    </header>
  );
}