import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Hallo, ich bin Swyra 🚀</h1>
      <p>Dein Marktplatz für die Schweiz.</p>

      <p>
        👉 <Link href="/about">Mehr über Swyra erfahren</Link>
      </p>
    </main>
  );
}
