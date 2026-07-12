import RestaurantCard from "./RestaurantCard";

export default function RestaurantGrid({
  restaurants,
}: {
  restaurants: any[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant._id}
          restaurant={restaurant}
        />
      ))}
    </div>
  );
}