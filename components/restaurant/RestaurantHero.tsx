"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RestaurantHeroProps {
  restaurant: {
    name: string;
    coverImage: string;
  };
}

export default function RestaurantHero({
  restaurant,
}: RestaurantHeroProps) {
  return (
    <section className="relative h-[500px]">
      <Image
        src={restaurant.coverImage}
        alt={restaurant.name}
        fill
        className="object-cover"
        priority
      />
       
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl font-bold text-white">
            {restaurant.name}
          </h1>

          <Link href="/dashboard/reservation" className="mt-6 inline-block">
            <Button variant="outline" size="lg">
              Reserve Table
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}