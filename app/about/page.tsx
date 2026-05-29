import Image from "next/image";
import { ChefHat, Clock3, MapPin, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: ChefHat,
    title: "Expert Chefs",
    value: "15+",
  },
  {
    icon: Clock3,
    title: "Years Experience",
    value: "10+",
  },
  {
    icon: Star,
    title: "Positive Reviews",
    value: "5K+",
  },
  {
    icon: MapPin,
    title: "Premium Location",
    value: "Dhaka",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/images/hero/about-hero.jpg"
          alt="Restaurant Interior"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Welcome To Our Restaurant
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              A Fine Dining Experience Like No Other
            </h1>

            <p className="text-base text-gray-300 md:text-lg">
              We combine world-class cuisine, elegant ambiance, and exceptional
              service to create unforgettable dining moments for every guest.
            </p>

            <Button
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-400"
            >
              Reserve A Table
            </Button>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/images/gallery/restaurant-story.jpg"
            alt="Restaurant Story"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Our Story
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Passion For Exceptional Food & Service
          </h2>

          <p className="text-gray-400">
            Founded with a vision to redefine fine dining, our restaurant blends
            modern elegance with authentic culinary craftsmanship. Every dish is
            carefully prepared using premium ingredients and artistic
            presentation.
          </p>

          <p className="text-gray-400">
            Whether you are celebrating a special occasion, enjoying a romantic
            dinner, or simply exploring exquisite flavors, we promise an
            unforgettable experience from the moment you arrive.
          </p>

          <Button
            variant="outline"
            className="border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black"
          >
            Explore Menu
          </Button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-zinc-950 py-20">
        <div className="container mx-auto grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="border border-zinc-800 bg-zinc-900 text-center text-white"
              >
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <div className="rounded-full bg-amber-500/10 p-4">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>

                  <h3 className="text-3xl font-bold text-amber-400">
                    {item.value}
                  </h3>

                  <p className="text-gray-400">{item.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CHEF SECTION */}
      <section className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Master Chef
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Crafted By Culinary Experts
          </h2>

          <p className="text-gray-400">
            Our talented chefs bring years of experience and creativity into
            every plate. Inspired by global flavors and local traditions, they
            deliver dishes that satisfy both taste and presentation.
          </p>

          <p className="text-gray-400">
            From handcrafted appetizers to signature main courses and luxurious
            desserts, every detail is designed to elevate your dining journey.
          </p>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/images/gallery/master-chef.jpg"
            alt="Master Chef"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-24">
        <Image
          src="/images/hero/cta-bg.jpg"
          alt="Dining Table"
          fill
          className="object-cover brightness-25"
        />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Book Your Experience
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Reserve Your Table Today
            </h2>

            <p className="text-gray-300">
              Experience luxury dining, premium cuisine, and unforgettable
              moments with your friends and family.
            </p>

            <Button
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-400"
            >
              Make Reservation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}