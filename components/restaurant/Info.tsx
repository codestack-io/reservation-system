"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface InfoProps {
  restaurant: {
    coverImage: string;
    rating: number;
    reviews: number;
    name: string;
  };
}

export default function Info({ restaurant }: InfoProps) {
  const ratingRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ratingRef, { once: true });
  const [displayRating, setDisplayRating] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, restaurant.rating, {
        duration: 2,
        onUpdate(value) {
          setDisplayRating(Number(value.toFixed(1)));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, restaurant.rating]);
 
  return (
  <Card className="border-0 shadow-none bg-linear-to-r from-amber-50 to-orange-50">
  <CardContent className="max-w-7xl mx-auto py-20 px-6">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}

      <div>
        <span className="text-orange-600 uppercase tracking-[4px] font-semibold">
          Since 2012
        </span>

        <h2 className="text-5xl font-bold mt-3 text-gray-900">
          About {restaurant.name}
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Spice Route brings together authentic flavors, fresh ingredients,
          and warm hospitality to create an unforgettable dining experience.
          Every dish is carefully crafted by our experienced chefs using
          locally sourced ingredients.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div>
            <h3 className="text-4xl font-bold text-orange-500">
              12+
            </h3>

            <p className="text-gray-600">
              Years Experience
            </p>
          </div>

         <div>
  <h3 className="text-4xl font-bold text-orange-500">
    {restaurant.reviews.toLocaleString()}+
  </h3>

  <p className="text-gray-600">
    Reviews
  </p>
</div>

          <div>
           <h3 className="text-4xl font-bold text-orange-500">
          {displayRating.toFixed(1)}
          </h3>

            <p className="text-gray-600">
              Average Rating
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-orange-500">
              80+
            </h3>

            <p className="text-gray-600">
              Signature Dishes
            </p>
          </div>

        </div>
      </div>

      {/* Right */}

      <div className="relative">
        <img
       src={restaurant.coverImage}
        alt={restaurant.name}
        className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
/>

       <motion.div
  ref={ratingRef}
  initial={{ opacity: 0, y: 40, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-8 py-5"
>
  <p className="text-sm text-gray-500">Customer Rating</p>

  <div className="flex items-center gap-2 mt-2">
    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />

    <span className="text-3xl font-bold text-gray-900">
      {displayRating.toFixed(1)}
    </span>
  </div>
</motion.div>
      </div>

    </div>
  </CardContent>
</Card>
);
}
  