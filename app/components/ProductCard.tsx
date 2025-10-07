// app/components/ProductCard.tsx
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string; // public path, e.g. "/items/bike.jpg"
  badge?: "Neu" | "Top" | "CH";
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      style={{
        border: "1px solid var(--line)",
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 6px 20px rgba(17,24,39,.05)",
        transition: "transform .15s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget.style.transform = "translateY(-2px)"))}
      onMouseLeave={(e) => ((e.currentTarget.style.transform = "translateY(0)"))}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
        {product.badge && (
          <span
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              padding: "6px 10px",
              fontSize: 12,
              borderRadius: 999,
              background: "var(--brand-tint)",
              color: "var(--brand-ink)",
              border: "1px solid var(--brand-line)",
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div style={{ padding: 14 }}>
        <h3 style={{ fontSize: 16, margin: "0 0 6px 0", color: "var(--ink)" }}>
          {product.title}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "var(--muted)",
            fontSize: 14,
          }}
        >
          <span>{product.location}</span>
          <strong style={{ color: "var(--ink)" }}>
            {product.price.toLocaleString("de-CH", {
              style: "currency",
              currency: "CHF",
              maximumFractionDigits: 0,
            })}
          </strong>
        </div>
      </div>
    </article>
  );
}