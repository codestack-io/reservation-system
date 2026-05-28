import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("restaurantDB");

  // Insert test user
  await db.collection("users").insertOne({
    name: "Test User",
    email: "test@example.com",
    createdAt: new Date(),
  });

  // Fetch users from DB (IMPORTANT FIX)
  const users = await db.collection("users").find({}).toArray();

  return Response.json(users);
}