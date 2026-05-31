import RestaurantHero from "@/components/restaurant/RestaurantHero";
import RestaurantGallery from "@/components/restaurant/RestaurantGallery";
import RestaurantInfo from "@/components/restaurant/Info";
import RestaurantAmenities from "@/components/restaurant/RestaurantAmenities";
import RestaurantReviews from "@/components/restaurant/RestaurantReviews";
import RestaurantMap from "@/components/restaurant/Map";

export default async function RestaurantPage() {
  return (
    <main className="space-y-12">
      <RestaurantHero />
      <RestaurantInfo />
      <RestaurantGallery />
      <RestaurantAmenities />
      <RestaurantReviews />
      <RestaurantMap name="Restaurant" latitude={0} longitude={0} />
    </main>
  );
}