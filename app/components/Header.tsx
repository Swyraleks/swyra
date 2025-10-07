"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 40px",
        background: "#f9fafb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Nur das Logo ohne Text */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Swyra Logo"
          width={160}  // etwas grösser gemacht
          height={60}
          priority
        />
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px", fontSize: "15px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">Über uns</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}