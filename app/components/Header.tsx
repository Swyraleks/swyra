// app/components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar"; // ✔ korrekter Pfad

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
        {/* Logo + Brand */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <Image
            src="/swyra-logo-inline.svg"
            alt="Swyra"
            width={220}
            height={52}
            priority
          />
        </Link>

        {/* Navigation (kannst du wie gehabt lassen) */}
        <nav style={{ display: "flex", gap: 20, fontSize: 15 }}>
          <Link href="/">Home</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
      </header>

      {/* Suchleiste UNTER dem Header */}
      <div style={{ padding: "0 12px" }}>
        <SearchBar />
      </div>
    </>
  );
}