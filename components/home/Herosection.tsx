"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../shared/Header";

export default function HeroSection() {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      pagination={{ clickable: true }}
      modules={[Mousewheel, Pagination]}
      className="h-screen"
    >

      {/* HERO SLIDE */}
      <SwiperSlide>
      <section className="relative h-screen w-full overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/hero/table-image.jpg"
          alt="Restaurant Background"
          fill
          priority
          className="object-cover scale-105 animate-[slowZoom_12s_ease-in-out_infinite_alternate]"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* HEADER */}
        <div className="absolute left-170 items-center w-full z-30">
          <Header />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-4">
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
          >

            {/* SMALL TEXT */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0px" }}
              animate={{ opacity: 1, letterSpacing: "6px" }}
              transition={{ delay: 0.3, duration: 1 }}
              className="uppercase tracking-[6px] text-sm md:text-base text-gray-300"
            >
              Luxury Dining Experience
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 1.2,
                ease: "easeOut",
              }}
              className="mt-6 text-6xl md:text-8xl font-light text-white"
            >
              Élan
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Reserve unforgettable culinary moments crafted with elegance and passion.
            </motion.p>

            {/* BUTTON */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-10 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition duration-500 rounded-full"
            >
              Reserve a Table
            </motion.button>

          </motion.div>
        </div>
      </section>
    </SwiperSlide>
      {/* SECOND SLIDE */}
      <SwiperSlide>
        <section className=" h-screen bg-yellow-100 text-cyan-700 flex items-center justify-center">
         <div className="max-w-10xl max-h-10xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Content Column */}
      <div className="flex-3 max-w-5xl px-6 md:px-12 py-10">
        <p className= "text-3xl md:text-4xl text-gray-800 mb-2">
          Its your relax time.Turn it out more exciting with our reservation system.
        </p>
        <h2 className="text-5xl font-bold text-slate-900 mb-10 flex items-center gap-3">
          <span>🧑‍🍳</span> Restaurant with relaxation
        </h2>
        
        <div className="flex gap-4">
          <Link href="/menu" className="bg-[#68395B] hover:bg-[#522c48] text-white font-medium py-3 px-6 rounded-lg transition">
            Start now
          </Link>
        </div>
      </div>

      {/* Right Video/Image Column with custom curve */}
      <div className="flex-1 relative w-full max-w-800 aspect-square md:aspect-4/3">
        <div 
          className="w-full h-full relative overflow-hidden bg-slate-200 shadow-lg"
          style={{
            // This 8-value border-radius creates the exact asymmetrical egg/blob shape
            borderRadius: "40% 60% 40% 60% / 40% 40% 60% 60%"
          }}
        >
          {/* Background Image / Video Thumbnail */}
          <Image 
            src="/restaurant-video-thumb.jpg" // Replace with your image path
            alt="Restaurant video preview"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />

          {/* Play Button */}
          <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-200 group">
            {/* Play Icon Triangle */}
            <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-[#E05368] border-b-[10px] border-b-transparent ml-1" />
          </button>
        </div>
      </div>

    </div>
        </section>
      </SwiperSlide>

    </Swiper>
  );
}