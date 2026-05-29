import { NextResponse } from "next/server";
import { getMenuItems } from "@/app/api/services/menu.service";

export async function GET() {
  try {
    const menu = await getMenuItems();
    return NextResponse.json(menu);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch menu" },
      { status: 500 }
    );
  }
}