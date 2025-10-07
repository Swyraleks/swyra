export default function CallToAction() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "linear-gradient(to right, #f0f9ff, #e0f2fe)",
        borderRadius: "12px",
        marginTop: "40px",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Starte jetzt mit Swyra 🚀
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Verkaufe deine Produkte einfach, sicher und fair – oder entdecke neue Angebote.  
      </p>
      <a
        href="/signup"
        style={{
          padding: "15px 30px",
          backgroundColor: "#0284c7",
          color: "white",
          borderRadius: "8px",
          fontSize: "1.1rem",
          textDecoration: "none",
        }}
      >
        Jetzt kostenlos starten
      </a>
    </section>
  );
}