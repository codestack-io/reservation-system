import RestaurantGrid from "@/components/explore/RestaurantGrid";

async function getRestaurants() {
  try {
    const res = await fetch(
      "http://localhost:5000/api/restaurants",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Fetch restaurants error:", error);
    return [];
  }
}

export default async function ExplorePage() {
  const restaurants = await getRestaurants();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        Explore Restaurants
      </h1>

      <RestaurantGrid restaurants={restaurants} />
    </main>
  );
}