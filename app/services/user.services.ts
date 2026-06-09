import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

type User = {
  _id: ObjectId;
  name: string;
  email: string;
  role: string;
};

type Reservation = {
  userId: ObjectId;
};

export async function getUsers(): Promise<
  (User & { reservationCount: number })[]
> {
  const db = await connectDB();
  const database = db.connection.db; // mongoose-safe access

  if (!database) {
    throw new Error("Database connection not ready");
  }

  // ✅ fetch users
  const users = await database.collection<User>("users").find({}).toArray();

  // ✅ fetch only needed field (OPTIMIZED)
  const reservations = await database
    .collection<Reservation>("reservations")
    .find({}, { projection: { userId: 1 } })
    .toArray();

  // ✅ build map (FAST O(n))
  const countMap = new Map<string, number>();

  for (const r of reservations) {
    const id = r.userId?.toString();
    if (!id) continue;

    countMap.set(id, (countMap.get(id) || 0) + 1);
  }

  // ✅ merge
  return users.map((user: User) => ({
    ...user,
    reservationCount: countMap.get(user._id.toString()) || 0,
  }));
}