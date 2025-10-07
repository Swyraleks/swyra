"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Ist Swyra kostenlos?",
    a: "Ja. Registrierung und Angebots-Erstellung sind kostenlos. Beim Verkauf können – je nach Zahlungsart – geringe Transaktionsgebühren anfallen.",
  },
  {
    q: "Welche Zahlungen sind möglich?",
    a: "TWINT, klassische Banküberweisung sowie – optional – Kryptowährungen. Du kannst pro Angebot steuern, was du zulässt.",
  },
  {
    q: "Gibt es einen Käuferschutz?",
    a: "Ja. Unser Käufer:innenschutz-Konzept greift bei TWINT/Banküberweisung mit klaren Regeln und Nachweisen.",
  },
  {
    q: "Brauche ich eine App?",
    a: "Nein. Swyra funktioniert am Desktop und mobil im Browser. Eine App folgt zu einem späteren Zeitpunkt.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-wrap" aria-labelledby="faq-title">
      <span className="badge">Häufige Fragen</span>
      <h2 id="faq-title" className="faq-title">
        FAQ zu Swyra
      </h2>

      <div className="faq-grid">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`faq-card ${isOpen ? "is-open" : ""}`}>
              <button
                className="faq-trigger"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className="faq-content"
                style={{
                  maxHeight: isOpen ? 400 : 0,
                }}
              >
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}