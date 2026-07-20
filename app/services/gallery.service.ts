import { connectDB } from "@/lib/db";
import Gallery from "@/app/models/gallery.model";

export async function getRestaurantGallery(name: string) {
  await connectDB();

  const gallery = await Gallery.findOne({ name }).lean();

  if (!gallery) return null;

  return {
    ...gallery,
    _id: gallery._id.toString(),
  };
}