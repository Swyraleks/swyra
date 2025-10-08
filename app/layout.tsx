import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

// ✅ Google-Font (funktioniert out-of-the-box)
const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata = {
  title: { default: "Swyra", template: "%s | Swyra" },
  description: "Sicher handeln, einfach zahlen.",
  icons: {
    icon: "/swyra-icon.svg",
    shortcut: "/swyra-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
<body className={`${inter.className} antialiased`}>
  <Header />
  {children}
  <Footer />   {/* Hier haben wir den Footer eingebaut */}
</body>
    </html>
  );
}