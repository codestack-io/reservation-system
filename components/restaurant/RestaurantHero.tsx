"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function RestaurantHero() {
  return (
    <section className="relative h-[500px]">
      <Image
        src="/images/2.jpg"
        alt="Ocean View Restaurant"
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
            Ocean View Restaurant
          </h1>

          <Button className="mt-6">
            Reserve Table
          </Button>
        </motion.div>
      </div>
    </section>
  );
}