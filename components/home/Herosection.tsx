import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
        //   backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[6px] text-sm mb-4 text-orange-400">
          Luxury Dining Experience
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Reserve Your <br /> Perfect Table
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8 text-lg">
          Experience fine dining, premium cuisine, and unforgettable moments.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/reservation"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full font-medium"
          >
            Book Table
          </Link>

          <Link
            href="/menu"
            className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-full font-medium"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
}