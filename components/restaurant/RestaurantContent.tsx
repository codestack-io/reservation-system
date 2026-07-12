"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star } from "lucide-react";

interface Restaurant {
  _id: string;
  name: string;
  image: string;
  address: string;
  description: string;
  cuisine: string;
  rating: number;
  priceRange: string;
}

interface RestaurantContentProps {
  restaurants: Restaurant[];
}

export default function RestaurantContent({
  restaurants,
}: RestaurantContentProps) {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="container mx-auto px-4 py-16"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="inline-block cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-[#68395B]">
          Explore Restaurants
        </h2>

        <p className="text-gray-500 mt-2">
          Hover to discover our locations
        </p>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          >
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">
                      {restaurant.name}
                    </h3>

                    <span className="text-sm font-semibold">
                      {restaurant.priceRange}
                    </span>
                  </div>

                  <p className="text-[#68395B] mt-2">
                    {restaurant.cuisine}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-gray-500">
                    <MapPin size={16} />
                    {restaurant.address}
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    {restaurant.rating}
                  </div>

                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {restaurant.description}
                  </p>

                  <Link
                    href={`/restaurants/${restaurant._id}`}
                    className="inline-block mt-6 rounded-lg bg-[#68395B] px-5 py-3 text-white transition hover:bg-[#522c48]"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}