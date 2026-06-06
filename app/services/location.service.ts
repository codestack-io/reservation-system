import { connectDB } from "@/lib/mongodb";

export async function getLocations() {
  const db = await connectDB();

  const locations = await db
    .collection("locations")
    .find({})
    .toArray();

  return locations.map((loc) => ({
    _id: loc._id.toString(),
    city: loc.city,
    country: loc.country,
    image: loc.image ?? null,
  }));
}