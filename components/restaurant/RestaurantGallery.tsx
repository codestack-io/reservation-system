"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/5.jpg",
  "/images/5.jpg",
];

export default function RestaurantGallery() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Gallery
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image}
              alt="Restaurant"
              width={400}
              height={300}
              className="rounded-xl object-cover h-64 w-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}