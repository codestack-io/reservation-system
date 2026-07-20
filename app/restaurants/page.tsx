import { getRestaurants } from "@/app/services/restaurant.service";
import RestaurantCard from "@/components/explore/RestaurantCard";

interface Restaurant {
  _id: string;
  name: string;
}

export default async function RestaurantsPage() {
  const restaurants: Restaurant[] = await getRestaurants();
  console.log("Restaurants data:", restaurants); // Debugging line to check the fetched data

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