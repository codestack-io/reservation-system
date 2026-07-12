import { connectDB } from "@/lib/db";
import Restaurant from "@/app/models/restaurant.model";

export async function getRestaurantById(id: string) {
  await connectDB();

  const restaurant = await Restaurant.findById(id).lean();

  if (!restaurant) return null;

  return {
    ...restaurant,
    _id: restaurant._id.toString(),
  };
}