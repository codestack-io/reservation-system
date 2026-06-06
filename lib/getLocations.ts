import clientPromise from "./mongodb";

export async function getLocations() {
  const client = await clientPromise;
  const db = client.db();

  const locations = await db.collection("locations").find({}).toArray();
 return locations.map((loc) => ({
    _id: loc._id.toString(),
    city: loc.city,
    country: loc.country,
    restaurantCount: loc.restaurantCount,
    featured: loc.featured,
    image: loc.image,
  }));
}