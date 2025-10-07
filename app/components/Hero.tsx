// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section style={wrap}>
      <div className="container" style={inner}>
        <div style={left}>

          <h1 style={title}>
            Sicher handeln,<br />einfach zahlen.
          </h1>

          <p style={lead}>
            Der moderne Marktplatz aus der Schweiz – mit TWINT, Banküberweisung
            oder Kryptowährungen bezahlen. Schnell, fair und nutzerfreundlich.
          </p>

          <div style={{display:'flex', gap:12, marginTop:18}}>
            <a href="/about" className="btn btn-primary">Mehr über Swyra</a>
            <a href="/contact" className="btn btn-secondary">Kontakt</a>
          </div>
        </div>

<div style={right}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      borderRadius: "16px",
      padding: "40px", // etwas mehr Abstand
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      minHeight: "220px", // damit das Feld etwas größer bleibt
    }}
  >
    <Image
      src="/logo-swyra.svg"
      alt="Swyra Logo mit Text"
      width={500}
      height={160}
      style={{ width: "100%", height: "auto", maxWidth: "420px" }}
    />
  </div>
</div>
</div>
      </div>
    </section>
  );
}

/* ===== inline styles ===== */
const wrap: React.CSSProperties = {
  padding: '96px 0',
  background:
    'radial-gradient(1200px 600px at 70% 0%, #eaf3ff 0%, rgba(234,243,255,0) 55%)',
};
const inner: React.CSSProperties = {
  display:'grid',
  gridTemplateColumns:'1.1fr 0.9fr',
  gap:48,
  alignItems:'center',
};
const left: React.CSSProperties = { maxWidth: 600 };
const right: React.CSSProperties = { display:'flex', justifyContent:'center' };

const badge: React.CSSProperties = {
  display:'inline-block',
  background:'#eef5ff',
  color:'#1f3b6f',
  padding:'8px 12px',
  borderRadius:999,
  fontWeight:600,
  marginBottom:16,
  border:'1px solid #d7e6ff'
};

const title: React.CSSProperties = {
  fontSize: 'clamp(36px, 6vw, 56px)',
  lineHeight: 1.05,
  margin: '8px 0 12px',
};
const lead: React.CSSProperties = {
  fontSize: 18,
  margin: '4px 0 6px',
};

const mock: React.CSSProperties = {
  width:'100%', maxWidth:520, padding:24,
  minHeight:180, display:'flex', flexDirection:'column', gap:14
};
const line: React.CSSProperties = {
  height:10, width:'70%', background:'#d9e7ff', borderRadius:6
};
const lineThin: React.CSSProperties = {
  height:8, width:'100%', background:'#eef5ff', borderRadius:6
};