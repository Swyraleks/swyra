import React from "react";

/* ========= Haupt-Features ========= */

// Sicher zahlen – Schloss im Schild
export const IconSecure: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eaf2ff" />
        <stop offset="1" stopColor="#dbe7ff" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#g1)" />
    <path
      d="M24 30c-.7 0-1.3-.6-1.3-1.3v-2.1c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3v2.1c0 .7-.6 1.3-1.3 1.3zm-7.2-6.5v-2.8c0-4 3.2-7.2 7.2-7.2s7.2 3.2 7.2 7.2v2.8h1.6c.9 0 1.6.7 1.6 1.6v8c0 .9-.7 1.6-1.6 1.6H15.2c-.9 0-1.6-.7-1.6-1.6v-8c0-.9.7-1.6 1.6-1.6h1.6zm3.2 0h8v-2.8c0-2.6-2.1-4.8-4.8-4.8s-4.8 2.1-4.8 4.8v2.8z"
      fill="#0d1b2b"
      fillOpacity=".9"
    />
  </svg>
);

// Einfach handeln – Blitz im Kreis
export const IconSimple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <defs>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eafdf7" />
        <stop offset="1" stopColor="#dcf7ef" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#g2)" />
    <circle cx="24" cy="24" r="10.5" fill="none" stroke="#19b27b" strokeWidth="2.6" />
    <path
      d="M23 16l-5 9h5l-1 7 7-11h-5l-1-5z"
      fill="#19b27b"
    />
  </svg>
);

// Lokal & vertrauenswürdig – Herz-Handschlag / CH Badge
export const IconTrusted: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <defs>
      <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eef5ff" />
        <stop offset="1" stopColor="#e3f0ff" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#g3)" />
    <path
      d="M24 33c-4.2-3.3-8-6.2-8-9.9a5.1 5.1 0 018-4 5.1 5.1 0 018 4c0 3.7-3.8 6.6-8 9.9z"
      fill="#0d60c8"
      fillOpacity=".9"
    />
    <rect x="29.3" y="13.8" width="9" height="6.2" rx="3.1" fill="#0d60c8"/>
    <rect x="32.3" y="15.8" width="3" height="2" fill="#fff" />
    <rect x="34.3" y="14.8" width="1" height="4" fill="#fff" />
  </svg>
);

/* ========= Für „In 3 Schritten“ ========= */

export const IconRegister: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <rect x="6" y="8" width="36" height="28" rx="6" fill="#eaf2ff" />
    <path d="M14 18h20M14 24h12" stroke="#0d1b2b" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="34" cy="24" r="6" fill="#19b27b" />
    <path d="M31.8 24.2l1.8 1.8 3.6-3.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconListing: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <rect x="6" y="8" width="36" height="28" rx="6" fill="#eafdf7" />
    <rect x="14" y="16" width="20" height="14" rx="2" fill="#19b27b" />
    <circle cx="36" cy="16" r="4" fill="#fff" />
  </svg>
);

export const IconShieldCheck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 48 48" width="48" height="48" {...props}>
    <path d="M24 6l13 5v10c0 8.3-6 14.6-13 17-7-2.4-13-8.7-13-17V11l13-5z" fill="#e8f3ff" />
    <path d="M20 24l3.4 3.4L30 20.8" stroke="#0d60c8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);