// app/data/listings.ts

export type Product = {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  badge?: "Neu" | "Top" | "CH";
};

export const LISTINGS: Product[] = [
  {
    id: "p1",
    title: "City-Bike 7-Gang, gepflegt",
    price: 220,
    location: "Zürich",
    image: "/items/bike.jpg",
    badge: "Top",
  },
  {
    id: "p2",
    title: "iPhone 13, 128 GB",
    price: 430,
    location: "Bern",
    image: "/items/iphone.jpg",
    badge: "Neu",
  },
  {
    id: "p3",
    title: "Kinderwagen Buggy",
    price: 90,
    location: "Luzern",
    image: "/items/stroller.jpg",
  },
  {
    id: "p4",
    title: "Snowboard Set (Bindung + Boots)",
    price: 290,
    location: "Chur",
    image: "/items/snowboard.jpg",
    badge: "CH",
  },
  {
    id: "p5",
    title: "Esstisch Eiche 160 cm",
    price: 350,
    location: "Basel",
    image: "/items/table.jpg",
  },
  {
    id: "p6",
    title: "Nintendo Switch OLED",
    price: 260,
    location: "St. Gallen",
    image: "/items/switch.jpg",
  },
];