// app/api/tables/route.ts
import { connectDB } from "@/lib/db";
import Table from "../../models/table";

export async function GET() {
  try {
    await connectDB();

    const tables = await Table.find().lean();

    const safeTables = tables.map((t) => ({
      ...t,
      _id: t._id.toString(),
    }));

    return Response.json(safeTables);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch tables" },
      { status: 500 }
    );
  }
}