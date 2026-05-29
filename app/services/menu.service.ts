import clientPromise from "@/lib/mongodb";

export async function getMenuItems() {
  const client = await clientPromise;
  const db = client.db("restaurantDB");

  return await db.collection("menu").find({}).toArray();
}