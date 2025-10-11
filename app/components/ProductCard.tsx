// app/components/ProductCard.tsx
"use client";

import Image from "next/image";

export default function ProductCard({
  title,
  price,
  image,
}: {
  title: string;
  price: number;
  image: string; // z.B. "/items/bike.jpg"
}) {
  return (
    <article
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 16,
        background: "#fff",
      }}
      className="card-hover"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 180,
          overflow: "hidden",
          borderRadius: 12,
          background: "#f6f7f9",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>

      <h3 style={{ marginTop: 12, marginBottom: 6, fontWeight: 700 }}>{title}</h3>
      <p style={{ color: "#2563eb", fontWeight: 700 }}>CHF {price}</p>

      <style jsx>{`
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </article>
  );
}