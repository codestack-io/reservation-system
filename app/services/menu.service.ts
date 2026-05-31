export interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

export async function getMenuItems(): Promise<MenuItem[]> {
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}