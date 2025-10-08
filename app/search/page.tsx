// app/search/page.tsx
type Props = {
  searchParams: { q?: string; cat?: string };
};

export default function SearchPage({ searchParams }: Props) {
  const q = (searchParams.q ?? "").toString();
  const cat = (searchParams.cat ?? "alle").toString();

  // TODO: Hier später deine echte Suche/Backend anbinden
  // aktuell nur Platzhalter
  return (
    <main style={{ maxWidth: 1100, margin: "24px auto", padding: "0 12px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>
        Suche{q ? `: „${q}”` : ""} {cat !== "alle" ? `· Kategorie: ${cat}` : ""}
      </h1>
      <p style={{ color: "#5a6b7b", marginBottom: 20 }}>
        (Platzhalter) Hier werden später die Treffer angezeigt.
      </p>

      <div
        style={{
          border: "1px solid #e6e7eb",
          borderRadius: 12,
          padding: 20,
          background: "#fff",
        }}
      >
        <p style={{ margin: 0 }}>
          Baue hier deine Listings-Abfrage ein (z. B. aus einer DB oder API).
        </p>
      </div>
    </main>
  );
}