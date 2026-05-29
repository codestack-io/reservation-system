"use client";

import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

export default function LoadingPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-light tracking-[0.3em]"
        >
          Élan
        </motion.h1>

        {/* LOADER */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="mt-8"
        >
          <LoaderCircle className="w-10 h-10 text-white/80" />
        </motion.div>

        {/* TEXT */}
        <p className="mt-6 text-sm tracking-[0.3em] uppercase text-white/60">
          Preparing Your Experience
        </p>
      </div>
    </section>
  );
}