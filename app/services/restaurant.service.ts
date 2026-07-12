import { connectDB } from "@/lib/db";
import Restaurant from "@/app/models/restaurant.model";

export async function getRestaurantById(id: string) {
  await connectDB();

  return await Restaurant.findById(id).lean();
}