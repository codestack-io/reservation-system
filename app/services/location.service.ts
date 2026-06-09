import { connectDB } from "@/lib/mongodb";
import Location from "@/app/models/location.model";

export async function getLocations() {
  await connectDB();

  const locations = await Location.find({});

  return locations;
}