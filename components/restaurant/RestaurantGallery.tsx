"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface RestaurantGalleryProps {
  images?: string[];
}

export default function RestaurantGallery({
  images = [],
}: RestaurantGalleryProps) {
  console.log(images);

  if (images.length === 0) {
    return (
      <section>
        <p>No gallery images found.</p>
      </section>
    );
  }
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
          Gallery
        </p>

        <h2 className="mt-3 text-5xl font-bold text-gray-900">
          A Taste of Our Restaurant
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Explore our beautiful dining spaces and signature dishes that make
          every visit memorable.
        </p>
      </div>

      {images?.length === 0 ? (
        <p className="text-center text-gray-500">
          No gallery images available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Restaurant Image ${index + 1}`}
                width={600}
                height={450}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}