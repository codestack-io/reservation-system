import RestaurantHero from "@/components/restaurant/RestaurantHero";
import RestaurantGallery from "@/components/restaurant/RestaurantGallery";
import RestaurantInfo from "@/components/restaurant/Info";
import RestaurantAmenities from "@/components/restaurant/RestaurantAmenities";
import RestaurantReviews from "@/components/restaurant/RestaurantReviews";
import RestaurantMap from "@/components/restaurant/RestaurantMap";
import { notFound } from "next/navigation";
import { getRestaurantById } from "@/app/services/restaurant.service";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function RestaurantPage({ params }: PageProps) {
  const { id } = await params;

  const restaurant = await getRestaurantById(id);

  if (!restaurant) {
    notFound();
  }

  return (
    <main className="border-4 border-red-500">
  <div className="border-4 border-blue-500">
    <RestaurantHero restaurant={restaurant} />
  </div>

  <div className="border-4 border-green-500">
    <RestaurantInfo restaurant={restaurant} />
  </div>

  <div className="border-4 border-yellow-500">
    <RestaurantGallery
      images={[
        restaurant.image,
        restaurant.coverImage,
      ]}
    />
  </div>

  <div className="border-4 border-purple-500">
    <RestaurantAmenities
      features={restaurant.features}
    />
  </div>

  <div className="border-4 border-pink-500">
    <RestaurantReviews />
  </div>

  <div className="border-4 border-cyan-500">
    <RestaurantMap
      name={restaurant.name}
      latitude={restaurant.coordinates.lat}
      longitude={restaurant.coordinates.lng}
    />
  </div>
</main>
  );
}