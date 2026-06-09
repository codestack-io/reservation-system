"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter, useSearchParams } from "next/navigation";




export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const router = useRouter();
const searchParams = useSearchParams();

const redirectPath =
  searchParams.get("redirect") || "/dashboard";

  // EMAIL LOGIN
const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    console.log("LOGIN RESPONSE:", data);

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (!data.token || !data.user) {
      throw new Error("Invalid response from server");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    toast.success("🎉 Login successful");

    router.push(redirectPath);

  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Login failed";

    console.log("LOGIN ERROR:", message);
    toast.error(message);
  }
};

  // GOOGLE LOGIN
const handleGoogleSuccess = async (credentialResponse: any) => {
  const res = await fetch("http://localhost:5000/api/auth/google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: credentialResponse.credential,
    }),
  });

  const data = await res.json();

  if (!data.token) {
    toast.error("Login failed");
    return;
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  toast.success("Login successful");

  // 🔥 FIX: use redirect param like email login
  const redirectPath =
    new URLSearchParams(window.location.search).get("redirect") ||
    "/dashboard";

  router.push(redirectPath);
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
         <GoogleLogin
  onSuccess={handleGoogleSuccess}
  onError={() => console.log("Login Failed")}
/>
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