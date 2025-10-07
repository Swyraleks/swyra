import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#f0f4f8",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
        <Image
          src="/logo-swyra.svg"           // << HIER: korrekter Pfad zur SVG
          alt="Swyra Logo"
          width={180}                     // kannst du anpassen
          height={60}                     // kannst du anpassen
          priority
          style={{
            height: "32px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* Navigation */}
      <nav>
        <Link href="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link href="/about" style={{ marginRight: "15px" }}>Über uns</Link>
        <Link href="/contact">Kontakt</Link>
      </nav>
    </header>
  );
}
