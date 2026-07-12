"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RestaurantGalleryProps {
  images: string[];
}

export default function RestaurantGallery({
  images,
}: RestaurantGalleryProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        Gallery
      </h2>

      {images.length === 0 ? (
        <p className="text-gray-500">No gallery images available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={image}
                alt={`Restaurant Image ${index + 1}`}
                width={400}
                height={300}
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}