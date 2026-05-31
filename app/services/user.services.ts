import clientPromise from "@/lib/mongodb";

export async function getUsers() {
  const client = await clientPromise;

  const db = client.db("restaurantDB");

  const users = await db
    .collection("users")
    .find({})
    .toArray();

  const reservations = await db
    .collection("reservations")
    .find({})
    .toArray();

  return users.map((user) => ({
    ...user,
    reservationCount: reservations.filter(
      (reservation) =>
        reservation.userId?.toString() ===
        user._id.toString()
    ).length,
  }));
}