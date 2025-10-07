// app/components/Footer.tsx
import Link from "next/link";

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer style={wrap}>
      <div className="container" style={inner}>
        <div>
          <div style={brand}>Swyra</div>
          <p style={{color:'#c7d2fe', maxWidth:420, marginTop:8}}>
            Einfach kaufen und verkaufen – sicher zahlen mit TWINT, Banküberweisung oder Krypto.
          </p>
        </div>

        <nav style={nav}>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">Über uns</FooterLink>
          <FooterLink href="/contact">Kontakt</FooterLink>
          <FooterLink href="https://github.com/" external>GitHub</FooterLink>
        </nav>
      </div>

      <div style={bottom}>
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:12}}>
          <small style={{color:'#9fb3ff'}}>© {year} Swyra – Alle Rechte vorbehalten</small>
          <div style={{display:'flex', gap:16}}>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({href, children, external=false}:{href:string; children:React.ReactNode; external?:boolean}){
  const props = external ? {target:'_blank', rel:'noreferrer'} : {};
  return (
    <Link href={href} {...props} style={link}>
      {children}
    </Link>
  );
}

/* ===== styles ===== */
const wrap: React.CSSProperties = {
  marginTop: 56,
  background:'#0a2540',
  color:'#eef4ff',
  borderTop:'1px solid rgba(255,255,255,.08)'
};
const inner: React.CSSProperties = {
  display:'flex',
  justifyContent:'space-between',
  alignItems:'flex-start',
  gap:32,
  padding:'40px 0'
};
const nav: React.CSSProperties = {
  display:'grid',
  gridTemplateColumns:'repeat(2, auto)',
  gap:12
};
const brand: React.CSSProperties = {
  fontWeight:800, fontSize:22, letterSpacing:.2, color:'#fff'
};
const link: React.CSSProperties = {
  color:'#c7d2fe', textDecoration:'none', fontWeight:600
};
const bottom: React.CSSProperties = {
  borderTop:'1px solid rgba(255,255,255,.08)',
  padding:'14px 0',
  background:'#081b31'
};