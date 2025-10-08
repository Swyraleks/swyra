// app/components/Features.tsx
type Feature = {
  icon: string;
  title: string;
  text: string;
};
const FEATURES: Feature[] = [
  {
    icon: '🔒',
    title: 'Sicher zahlen',
    text: 'TWINT, Banküberweisung & Krypto mit Käuferschutz-Konzept. Sicherheit an erster Stelle.',
  },
  {
    icon: '⚡',
    title: 'Einfach handeln',
    text: 'In wenigen Klicks kaufen & verkaufen – mobil & am Desktop. Schnell und unkompliziert.',
  },
  {
    icon: '🇨🇭',
    title: 'Aus der Schweiz',
    text: 'Lokal, vertrauenswürdig & kundenfreundlich.',
  },
];

export default function Features(){
  return(
    <section style={{padding:'28px 0 64px'}}>
      <div className="container" style={grid}>
        {FEATURES.map((f,i)=>(
          <article key={i} className="card" style={card}>
            <div style={iconBubble}>{f.icon}</div>
            <h3 style={cardTitle}>{f.title}</h3>
            <p style={{marginTop:8, color:'var(--muted)'}}>{f.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const grid: React.CSSProperties = {
  display:'grid',
  gridTemplateColumns:'repeat(3, 1fr)',
  gap:24,
};
const card: React.CSSProperties = {
  padding:'22px 22px',
  transition:'transform .18s ease, box-shadow .18s ease',
  borderRadius:16,
} as React.CSSProperties;
// Hover per CSS-in-JS (kleiner Trick):
(Object.assign(card, {
  ['&:hover' as any]: undefined
}));

const iconBubble: React.CSSProperties = {
  width:48, height:48, borderRadius:12,
  display:'grid', placeItems:'center',
  background:'#eff6ff', border:'1px solid #dbeafe',
  fontSize:24, marginBottom:12
};
const cardTitle: React.CSSProperties = {
  fontSize:18, fontWeight:800, margin:0
};