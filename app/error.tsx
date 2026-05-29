"use client";

import { motion } from "framer-motion";
import { TriangleAlert } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center shadow-2xl"
      >

        {/* ICON */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
            <TriangleAlert className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-4xl font-light">
          Something Went Wrong
        </h1>

        {/* MESSAGE */}
        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          We encountered an unexpected issue while preparing
          your luxury dining experience.
        </p>

        {/* ERROR MESSAGE */}
        <p className="mt-4 text-xs text-red-300 break-all">
          {error.message}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => reset()}
          className="mt-8 px-8 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition"
        >
          Try Again
        </button>
      </motion.div>
    </section>
  );
}