"use client";


import { useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Header from "../shared/Header";
import RestaurantContent from "../restaurant/RestaurantContent";
import Navbar from "../shared/Navbar";



interface Restaurant {
  _id: string;
  name: string;
  address: string;
  description: string;
}

interface LocationData {
  _id: string;
  city: string;
  country: string;
}

interface HeroSectionProps {
  restaurants: Restaurant[];
  locations: LocationData[];
 

}




export default function HeroSection({
  restaurants,
 locations,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  


   
  
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      className="h-screen"
    >
      {/* FIRST SLIDE */}
      <SwiperSlide>
        <section className="relative h-screen overflow-hidden">
          <Image
            src="/images/hero/table-image.jpg"
            alt="Restaurant Background"
            fill
            priority
            className="object-cover scale-105 animate-[slowZoom_12s_ease-in-out_infinite_alternate]"
          />

          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="absolute w-full z-30">
            <Header />
          </div>

          <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
            >
              <p className="uppercase tracking-[6px] text-sm md:text-base text-gray-300">
                Luxury Dining Experience
              </p>

              <h1 className="mt-6 text-6xl md:text-8xl font-light">
                Élan
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Reserve unforgettable culinary moments crafted with elegance
                and passion.
              </p>

              <button className="mt-10 px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition duration-500">
                Reserve a Table
              </button>
            </motion.div>
          </div>
        </section>
      </SwiperSlide>

      {/* SECOND SLIDE */}
     <SwiperSlide>
  <section className="relative h-screen bg-yellow-100">
    
    {/* Navbar */}
    <div className="absolute top-0 left-0 w-full z-50">
      <Navbar locations={locations} />
    </div>

    {/* Content */}
    <div className="h-full flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-3xl md:text-4xl text-gray-800 mb-4">
              Its your relax time.
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mb-8">
              🧑‍🍳 What you need !!
            </h2>

            <RestaurantContent restaurants={restaurants} />
          </div>

          {/* RIGHT */}
          <div className="relative w-full max-w-[550px] aspect-square mx-auto">
            <div
              className="relative w-full h-full overflow-hidden shadow-lg"
              style={{
                borderRadius:
                  "40% 60% 40% 60% / 40% 40% 60% 40%",
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/preview.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/video/food.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</SwiperSlide>
    </Swiper>
  );
}