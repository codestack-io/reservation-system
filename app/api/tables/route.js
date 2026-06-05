// app/api/tables/route.ts
import { connectDB } from "@/lib/db";
import Table from "../../models/table";

export async function GET() {
  try {
    await connectDB();

    const tables = await Table.find();

    return Response.json(tables);
  } catch (error) {
    return Response.json(
      { message: "Failed to fetch tables" },
      { status: 500 }
    );
  }
}