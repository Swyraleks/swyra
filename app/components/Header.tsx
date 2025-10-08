"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        {/* 🔹 Logo links */}
        <Link href="/" className="logo-link">
          <Image
            src="/swyra-logo-inline.svg" // Logo im public-Ordner
            alt="Swyra"
            width={120}
            height={44}
            priority
          />
        </Link>

        {/* 🔹 Desktop-Navigation */}
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        {/* 🔹 Mobile: Login rechts */}
        <div className="mobile-auth">
          <Link href="/login" className="btn btn-primary">
            Anmelden
          </Link>
        </div>
      </div>
    </header>
  );
}