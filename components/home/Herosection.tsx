"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

          <Image
            src="/images/hero/bg image.jpg"
            alt="Restaurant Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40 z-10" />

          <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
            <div>
              

              <p className="mt-4 text-xl text-gray-300">
                Reserve perfect table
                
              </p>
            </div>
          </div>

        </section>
      </SwiperSlide>

      {/* SECOND SLIDE */}
      <SwiperSlide>
        <section className="h-screen bg-white text-cyan-700 flex items-center justify-center">
          <div className="container align-items-center flex justify-between">
           <div>
                <h2 className="text-4xl font-bold mb-4">Experience Culinary Excellence</h2>
           </div>
           <div className = "bg-gray-200 p-6 rounded-lg shadow-lg">
        
           </div>
        
          </div>
        </section>
      </SwiperSlide>

    </Swiper>
  );
}