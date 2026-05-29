import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

async function getMenuData(): Promise<MenuItem[]> {
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  return res.json();
}

export default async function MenuPage() {
  const menuItems = await getMenuData();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/hero/menu-hero.jpg"
          alt="Menu Hero"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="space-y-4 text-center">
            <p className="tracking-[0.3em] text-amber-400 uppercase text-sm">
              Restaurant Menu
            </p>

            <h1 className="text-5xl font-bold">
              Our Delicious Dishes
            </h1>
          </div>
        </div>
      </section>

      {/* MENU ITEMS */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item: MenuItem) => (
            <div
              key={item._id}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-2 hover:border-amber-500"
            >
              {/* IMAGE */}
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-400">
                      {item.description}
                    </p>
                  </div>

                  <span className="font-bold text-amber-400">
                    ${item.price}
                  </span>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400"
                    />
                  ))}
                </div>

                <Button className="w-full bg-amber-500 text-black hover:bg-amber-400">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}