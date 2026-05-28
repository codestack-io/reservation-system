import HeroSection from "@/components/home/Herosection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import AboutPreview from "@/components/home/AboutPreview";
import ReservationCTA from "@/components/home/ReservationCTA";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturedDishes />
      <AboutPreview />
      <ReservationCTA />
      <GalleryPreview />
    </main>
  );
}