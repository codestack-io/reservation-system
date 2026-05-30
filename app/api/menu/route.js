import { NextResponse } from "next/server";
import { getMenuItems } from "@/app/services/menu.service";

export async function GET() {
  try {
    const menu = await getMenuItems();

    console.log("Menu:", menu);

    return NextResponse.json(menu);
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch menu",
        details: String(error),
      },
      { status: 500 }
    );
  }
}