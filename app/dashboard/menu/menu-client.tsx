"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import type { MenuItem } from "../../services/menu.service";

interface Props {
  menuItems: MenuItem[];
}

export default function MenuClient({ menuItems }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/menu-hero.jpg"
          alt="Menu Hero"
          fill
          priority
          className="object-cover brightness-50 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative z-10 text-center space-y-3">
          <p className="tracking-[0.3em] text-amber-400 uppercase text-sm">
            Gourmet Experience
          </p>

          <h1 className="text-5xl font-bold">
            Our Signature Menu
          </h1>

          <p className="text-zinc-400 max-w-md mx-auto text-sm">
            Carefully crafted dishes made with passion and premium ingredients
          </p>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {menuItems.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="overflow-hidden bg-zinc-900 border-zinc-800 hover:border-amber-500 transition-all shadow-lg">

                {/* IMAGE */}
                <div className="relative h-56">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <CardContent className="p-5 space-y-4">

                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <span className="text-amber-400 font-bold">
                      ${item.price}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>

                  {/* RATING */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold">
                    Order Now
                  </Button>

                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}