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
    <main className="space-y-24 pb-24">
      <RestaurantHero restaurant={restaurant} />

      {/* @ts-expect-error: props typing mismatch in component definition; passing restaurant data */}
      <RestaurantInfo restaurant={restaurant} />

 <RestaurantGallery
  images={[
    restaurant.image,
    restaurant.coverImage,
  ]}
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