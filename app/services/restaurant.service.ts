import clientPromise from "@/lib/mongodb";

export async function getRestaurants() {
  const client = await clientPromise;

  const db = client.db("restaurantDB");

  const restaurants = await db
    .collection("restaurants")
    .find({})
    .toArray();

  return restaurants.map((restaurant) => ({
    ...restaurant,
    _id: restaurant._id.toString(),
  }));
}