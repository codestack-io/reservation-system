import { clientPromise } from "../../lib/mongodb";

export async function getRestaurantGallery(name: string) {
  const client = await clientPromise;
  const db = client.db("restaurantDB");

  return await db.collection("gallery").findOne({ name });
}