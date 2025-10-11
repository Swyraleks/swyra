// app/components/FAQ.tsx
export default function FAQ() {
  const faqs = [
    {
      q: "Ist Swyra kostenlos?",
      a: "Ja. Registrierung und Inserate-Erstellung sind kostenlos. Beim Verkauf können – je nach Zahlungsart – geringe Transaktionsgebühren anfallen.",
    },
    {
      q: "Welche Zahlungen sind möglich?",
      a: "Banküberweisung und TWINT; optional auch Kryptowährungen. Pro Angebot kannst du definieren, welche Zahlungen zugelassen sind.",
    },
    {
      q: "Gibt es einen Käuferschutz?",
      a: "Unser Käuferschutz greift bei TWINT/Banküberweisung mit klaren Regeln und Nachweisen.",
    },
    {
      q: "Brauche ich eine App?",
      a: "Nein. Swyra funktioniert mobil im Browser und am Desktop. Eine App folgt evtl. später.",
    },
  ];

  return (
    <section className="faq">
      <h2>FAQ zu Swyra</h2>

      <ul className="faq-list" role="list">
        {faqs.map((item, i) => (
          <li key={i} className="faq-li">
            <details className="faq-item">
              <summary className="faq-q">
                <span>{item.q}</span>
                <svg
                  className="faq-chevron"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </summary>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}