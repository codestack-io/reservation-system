import clientPromise from "@/lib/mongodb";

const tables = Array.from({ length: 50 }, (_, i) => ({
  tableNumber: i + 1,
  capacity:
    i < 5 ? 2 :
    i < 15 ? 4 :
    i < 25 ? 6 :
    i < 35 ? 8 :
    i < 45 ? 10 : 12,
  status:
    (i + 1) % 7 === 0
      ? "reserved"
      : (i + 1) % 13 === 0
      ? "maintenance"
      : "available",
  createdAt: new Date(),
  updatedAt: new Date(),
}));

async function seedTables() {
  const client = await clientPromise;

  const db = client.db("restaurantDB");

  await db.collection("tables").insertMany(tables);

  console.log("50 tables inserted successfully!");
  process.exit(0);
}

seedTables().catch(console.error);