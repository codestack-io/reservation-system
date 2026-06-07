// app/api/dashboard/route.ts

import { NextResponse } from "next/server";
import Reservation from "@/models/Reservation";
import Table from "@/models/Table";
import MenuItem from "@/models/MenuItem";

export async function GET() {
  const totalReservations = await Reservation.countDocuments();

  const activeTables = await Table.countDocuments({
    status: "occupied",
  });

  const menuItems = await MenuItem.countDocuments();

  return NextResponse.json({
    totalReservations,
    activeTables,
    menuItems,
  });
}