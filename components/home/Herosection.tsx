"use client";

import { useRef } from "react";
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

      {/* ================= FIRST SLIDE ================= */}
      <SwiperSlide>
        <section className="relative h-screen overflow-hidden bg-background">

          {/* ================= ANIMATED BACKGROUND BLOBS ================= */}
          <div className="absolute inset-0 overflow-hidden z-0">

            <motion.div
              animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute -top-30 -left-30 w-[320px] h-80 rounded-full bg-primary/20 blur-[120px]"
            />

            <motion.div
              animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="absolute -bottom-35 -right-35 w-95 h-95 rounded-full bg-secondary/30 blur-[130px]"
            />

            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
              transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 w-65 h-65 rounded-full bg-accent/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* ================= BACKGROUND IMAGE ================= */}
          <Image
            src="/images/hero/table-image.jpg"
            alt="Restaurant Background"
            fill
            priority
            className="object-cover scale-105"
          />

          {/* ================= OVERLAY (SAFE CONTRAST) ================= */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* ================= HEADER ================= */}
          <div className="absolute w-full z-30">
            <Header />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="relative z-20 flex items-center justify-center h-full text-center px-4">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >

              {/* Subtitle */}
              <p className="uppercase tracking-[5px] text-xs sm:text-sm text-muted-foreground">
                Luxury Dining Experience
              </p>

              {/* Title */}
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-light text-foreground">
                Élan
              </h1>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Reserve unforgettable culinary moments crafted with elegance
                and passion.
              </p>

              {/* CTA BUTTON */}
              <button className="mt-8 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
                Reserve a Table
              </button>

              {/* ================= SCROLL INDICATOR ================= */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-10 flex flex-col items-center text-muted-foreground"
              >
                <p className="text-xs tracking-widest uppercase mb-2">
                  Press Enter or Scroll
                </p>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="text-primary text-xl"
                >
                  ↓
                </motion.div>
              </motion.div>

            </motion.div>
          </div>
        </section>
      </SwiperSlide>

      {/* ================= SECOND SLIDE ================= */}
      <SwiperSlide>
        <section className="relative h-screen bg-background">

          {/* ================= NAVBAR ================= */}
          <div className="absolute top-0 left-0 w-full z-50">
            <Navbar locations={locations} />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="h-full flex items-center">

            <div className="container mx-auto px-4 sm:px-6">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="text-center lg:text-left">

                  <p className="text-xl sm:text-2xl md:text-3xl text-foreground">
                    Its your relax time.
                  </p>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4">
                    👨‍🍳 What you need !!
                  </h2>

                  <div className="mt-6">
                    <RestaurantContent restaurants={restaurants} />
                  </div>

                </div>

                {/* RIGHT SIDE (VIDEO) */}
                <div className="flex justify-center">

                  <div
                    className="relative w-full max-w-112.5 sm:max-w-125 aspect-square overflow-hidden shadow-lg border border-border"
                    style={{
                      borderRadius: "40% 60% 40% 60% / 40% 40% 60% 40%",
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