"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Restaurant {
  _id: string;
  name: string;
  address: string;
  description: string;
}

interface RestaurantContentProps {
  restaurants: Restaurant[];
}

export default function RestaurantContent({
  restaurants,
}: RestaurantContentProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Title */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="inline-block cursor-pointer"
      >
        <h3 className="text-2xl font-bold text-[#68395B] border-b-2 border-[#68395B] pb-2">
          Explore with us
        </h3>

        <p className="text-gray-500 mt-2">
          Hover to discover our locations
        </p>
      </motion.div>

      {/* Animated List */}
      <AnimatePresence>
        {open && (
         <motion.div
    initial={{
        opacity:0,
        y:40
    }}
    animate={{
        opacity:1,
        y:0
    }}
    transition={{
        duration:0.8
    }}
>
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant._id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="bg-white rounded-xl p-5 shadow-md"
              >
                <h3 className="text-xl font-bold">
                  {restaurant.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {restaurant.address}
                </p>

                <p className="text-gray-600 mt-2">
                  {restaurant.description}
                </p>

                <Link
                  href={`/restaurants/${restaurant._id}`}
                  className="inline-block mt-4 bg-[#68395B] hover:bg-[#522c48] text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}