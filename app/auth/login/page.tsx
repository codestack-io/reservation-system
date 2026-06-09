"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { auth } from "@/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const router = useRouter();
const searchParams = useSearchParams();

const redirectPath =
  searchParams.get("redirect") || "/dashboard";

  // EMAIL LOGIN
  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {

    const result = await signInWithEmailAndPassword(
  auth,
  email,
  password
);

// Example role handling
const userData = {
  id: result.user.uid,
  email: result.user.email,
  role: "user", // later fetch from backend
};

localStorage.setItem(
  "user",
  JSON.stringify(userData)
);

toast.success("🎉 Login successful");


      router.push(redirectPath);

    } catch (error) {

      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      console.log(errorMessage);
      alert(errorMessage);

    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {

    const provider = new GoogleAuthProvider();

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log(result.user);
       toast.success("🎉 Google Login successful");
    

    } catch (error) {

      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      console.log(errorMessage);
      alert(errorMessage);

    }
   
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero/table-image.jpg"
        alt="Luxury Restaurant"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl"
      >

        {/* LOGO */}
        <div className="text-center">
          <h1 className="text-5xl font-light tracking-wide">
            Élan
          </h1>

          <p className="mt-3 text-gray-300">
            Private Dining Experience
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-5"
        >

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition duration-300"
          >
            Login
          </button>

          {/* DIVIDER */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-white/20 flex-1" />
            <span className="text-gray-400 text-sm">
              OR
            </span>
            <div className="h-px bg-white/20 flex-1" />
          </div>

          {/* GOOGLE LOGIN */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Continue with Google
          </button>
        </form>

        {/* REGISTER */}
        <p className="mt-8 text-center text-gray-300">
          No account yet?{" "}
          <Link
            href="/auth/register"
            className="text-white hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </section>
  );
}