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

export default async function RestaurantPage({
  params,
}: PageProps) {
  const { id } = await params;

  // Fetch restaurant
  const restaurant = await getRestaurantById(id);

  if (!restaurant) {
    notFound();
  }

  // Fetch gallery separately
  const gallery = await getRestaurantGallery(restaurant.name);

  console.log("Restaurant:", restaurant);
  console.log("Gallery:", gallery);

  return (
    <main>
      <RestaurantHero restaurant={restaurant} />

      <RestaurantInfo restaurant={restaurant} />

      <RestaurantGallery
        images={gallery?.gallery ?? []}
      />

      <RestaurantAmenities
        features={restaurant.features}
      />

      <RestaurantReviews />

      <RestaurantMap
        name={restaurant.name}
        latitude={restaurant.coordinates.lat}
        longitude={restaurant.coordinates.lng}
      />
    </main>
  );
}