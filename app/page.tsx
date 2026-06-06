import HeroSection from "@/components/home/Herosection";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import AboutPreview from "@/components/home/AboutPreview";
import ReservationCTA from "@/components/home/ReservationCTA";
import GalleryPreview from "@/components/home/GalleryPreview";
import { getLocations }  from "@/app/services/location.service";

async function getRestaurants() {
  return [
    {
      _id: "1",
      name: "Ocean View Restaurant",
      address: "Dhanmondi, Dhaka",
      description: "Premium seafood and city views.",
    },
    {
      _id: "2",
      name: "Skyline Bistro",
      address: "Banani, Dhaka",
      description: "Modern rooftop dining experience.",
    },
    {
      _id: "3",
      name: "Royal Feast",
      address: "Gulshan, Dhaka",
      description: "Luxury international cuisine.",
    },
  ];
}

export default async function HomePage() {
   const locations = await getLocations();;
  const restaurants = await getRestaurants();
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