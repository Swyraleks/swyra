// app/components/ListingGrid.tsx
"use client";

import ProductCard from "./ProductCard";
import { listings } from "../data/listings";

export default function ListingGrid() {
  return (
    <section style={{ maxWidth: 1100, margin: "60px auto 0", padding: "0 20px" }}>
      <h2 style={{ fontSize: 28, marginBottom: 20 }}>Frische Angebote</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {listings.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image} // z.B. "/items/bike.jpg"
          />
        ))}
      </div>
    </section>
  );
}