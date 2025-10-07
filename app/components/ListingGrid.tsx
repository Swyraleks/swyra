'use client';

import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: 'Mountainbike',
    price: 'CHF 1’200',
    image: '/items/bike.jpg',
  },
  {
    id: 2,
    title: 'iPhone 14',
    price: 'CHF 950',
    image: '/items/iphone.jpg',
  },
  {
    id: 3,
    title: 'Kinderwagen',
    price: 'CHF 250',
    image: '/items/stroller.jpg',
  },
  {
    id: 4,
    title: 'Snowboard',
    price: 'CHF 490',
    image: '/items/snowboard.jpg',
  },
  {
    id: 5,
    title: 'Holztisch',
    price: 'CHF 350',
    image: '/items/table.jpg',
  },
  {
    id: 6,
    title: 'Nintendo Switch',
    price: 'CHF 280',
    image: '/items/switch.jpg',
  },
];

export default function ListingGrid() {
  return (
    <section style={{ maxWidth: 1100, margin: '80px auto', padding: '0 20px' }}>
      <h2 style={{ fontSize: 28, marginBottom: 30 }}>Frische Angebote</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 24,
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="card">
            <div className="image-container">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          border: 1px solid #eee;
          border-radius: 12px;
          overflow: hidden;
          background: white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .image-container {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .info {
          padding: 14px;
        }

        h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }

        p {
          margin: 0;
          font-weight: 600;
          color: #0070f3;
        }
      `}</style>
    </section>
  );
}