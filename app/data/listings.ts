// app/data/listings.ts
export type Listing = {
  id: number;
  title: string;
  price: number;
  image: string; // Pfad relativ zu /public
};

export const listings: Listing[] = [
  { id: 1, title: "Mountainbike",      price: 1200, image: "/items/bike.jpg" },
  { id: 2, title: "iPhone 14",         price: 950,  image: "/items/iphone.jpg" },
  { id: 3, title: "Kinderwagen",       price: 250,  image: "/items/stroller.jpg" },
  { id: 4, title: "Snowboard",         price: 490,  image: "/items/snowboard.jpg" },
  { id: 5, title: "Holztisch",         price: 350,  image: "/items/table.jpg" },
  { id: 6, title: "Nintendo Switch",   price: 280,  image: "/items/switch.jpg" },
];