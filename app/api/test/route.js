import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    const databases = await client.db().admin().listDatabases();

    return NextResponse.json({
      connected: true,
      databases: databases.databases.map((db) => db.name),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        connected: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}