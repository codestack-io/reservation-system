import HeroSection from "@/components/home/Herosection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import AboutPreview from "@/components/home/AboutPreview";
import ReservationCTA from "@/components/home/ReservationCTA";
import GalleryPreview from "@/components/home/GalleryPreview";

import { connectDB } from "@/lib/mongodb";
import Location from "@/app/models/location.model";
import Restaurant from "@/app/models/restaurant.model";

export default async function HomePage() {
  await connectDB();

  const locationsRaw = await Location.find().lean();
  const restaurantsRaw = await Restaurant.find().lean();

  // 🔥 IMPORTANT: convert ObjectId → string
  const locations = locationsRaw.map((loc) => ({
    ...loc,
    _id: loc._id.toString(),
  }));

  const restaurants = restaurantsRaw.map((res) => ({
    ...res,
    _id: res._id.toString(),
  }));

  return (
    <main className="overflow-x-hidden">
      <HeroSection
        locations={locations}
        restaurants={restaurants}
      />

      <FeaturedDishes />
      <AboutPreview />
      <ReservationCTA />
      <GalleryPreview />
    </main>
  );
}