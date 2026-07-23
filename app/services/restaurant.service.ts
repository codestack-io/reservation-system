import { connectDB } from "@/lib/db";
import Restaurant from "@/app/models/restaurant.model";

export async function getRestaurants() {
  await connectDB();

  const restaurants = await Restaurant.find().lean();

  return restaurants.map((restaurant) => ({
    ...restaurant,
    _id: restaurant._id.toString(),
  }));
}

export async function getRestaurantById(id: string) {
  await connectDB();
  console.log("Searching ID:", id);

  const restaurant = await Restaurant.findById(id).lean();


  console.log("Found:", restaurant);

  if (!restaurant) return null;

  return {
    ...restaurant,
    _id: restaurant._id.toString(),
  };
}

export async function getRestaurantGallery(restaurantName: string) {
  await connectDB();

  const gallery = await Restaurant.findOne({ name: restaurantName }, { gallery: 1 }).lean();

  return gallery;
}