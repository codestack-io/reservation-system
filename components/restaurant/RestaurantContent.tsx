"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const popularRestaurants = restaurants.slice(0, 3);

  return (
    <section
      className="container mx-auto px-4 py-12 relative"
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

      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? "auto" : 0,
          marginTop: open ? 40 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {popularRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: open ? 1 : 0,
                y: open ? 0 : 30,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
flex
flex-col
overflow-hidden
rounded-3xl
bg-[#FFF6E8]
border
border-[#E8D3B0]
shadow-md
hover:shadow-xl
transition-all
duration-300
"
            >
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={600}
                height={400}
                className="w-full h-40 object-cover"
                
              />

              <div className="p-3 flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-amber-900 font-bold">
                    {restaurant.name}
                  </h3>

                  <span className="text-sm text-amber-800 font-semibold">
                    {restaurant.priceRange}
                  </span>
                </div>

                <p className="text-[#68395B] mt-1">
                  {restaurant.cuisine}
                </p>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <MapPin size={16} />
                  <span>{restaurant.address}</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span>{restaurant.rating}</span>
                </div>

                <p className="text-gray-600 mt-2 line-clamp-2">
                  {restaurant.description}
                </p>

                <Link
                 href={`/restaurants/${restaurant._id}`}
                 className="mt-auto inline-block rounded-lg bg-[#68395B] px-5 py-3 text-white hover:bg-[#522c48]"
               >
                View Details
              </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}