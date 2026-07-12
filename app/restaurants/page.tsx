import { getRestaurants } from "@/app/services/restaurant.service";
import RestaurantCard from "@/components/explore/RestaurantCard";

interface Restaurant {
  _id: string;
}

export default async function RestaurantsPage(): Promise<JSX.Element> {
  const restaurants: Restaurant[] = await getRestaurants();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}