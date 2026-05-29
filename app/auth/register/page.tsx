"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND */}
      <Image
        src="/images/hero/table-image.jpg"
        alt="Luxury Restaurant"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl"
      >

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-5xl font-light">
            Élan
          </h1>

          <p className="mt-3 text-gray-300">
            Become a VIP Member
          </p>
        </div>

        {/* FORM */}
        <form className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Create Account
          </button>
        </form>

        {/* LOGIN */}
        <p className="mt-8 text-center text-gray-300">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </section>
  );
}