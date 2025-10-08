// app/components/Footer.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

// Kleine Link-Helferkomponente für den Footer
function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      {...externalProps}
      style={{ textDecoration: "none", color: "#0f172a" }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: "24px 0", borderTop: "1px solid #e5e7eb", marginTop: 40 }}>
      {/* Kopfzeile im Footer */}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <small>© {year} Swyra</small>

        {/* Du kannst das img auch auf <Image> umstellen, falls gewünscht */}
        <img src="/powered-by-swyra.svg" alt="powered by swyra" height={22} />
      </div>

      {/* Navigationszeile */}
      <div style={{ marginTop: 16 }}>
        <nav style={{ display: "flex", gap: 20, fontSize: 15 }}>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">Über uns</FooterLink>
          <FooterLink href="/kontakt">Kontakt</FooterLink>
          <FooterLink href="https://github.com/" external>
            GitHub
          </FooterLink>
        </nav>
      </div>

      {/* untere Leiste */}
      <div style={{ marginTop: 20 }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <small style={{ color: "#9fb3ff" }}>
            © {year} Swyra | Alle Rechte vorbehalten
          </small>

          <div style={{ display: "flex", gap: 16 }}>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}