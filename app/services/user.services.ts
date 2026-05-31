import clientPromise from "@/lib/mongodb";
import type { ObjectId } from "mongodb";

type User = {
  _id: ObjectId;
  name: string;
  email: string;
  role: string;
};

export async function getUsers(): Promise<
  (User & { reservationCount: number })[]
> {
  const client = await clientPromise;
  const db = client.db("restaurantDB");

  const users = await db.collection<User>("users").find({}).toArray();

  const reservations = await db
    .collection("reservations")
    .find({})
    .toArray();

  return users.map((user) => ({
    ...user,
    reservationCount: reservations.filter(
      (reservation) =>
        reservation.userId?.toString() === user._id.toString()
    ).length,
  }));
}