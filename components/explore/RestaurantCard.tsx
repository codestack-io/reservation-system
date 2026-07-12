import Link from "next/link";

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: any;
}) {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {restaurant.name}
        </h2>

        <p className="text-gray-500">
          {restaurant.city}
        </p>

        <p className="mt-2 text-sm">
          {restaurant.description}
        </p>

        <Link
          href={`/restaurants/${restaurant._id}`}
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}