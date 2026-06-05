import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

import Table from "../../models/table";
import Reservation from "../../models/reservations";

export async function GET(req: NextRequest) {
  try {
    await connectDB;

    const searchParams = req.nextUrl.searchParams;

    const date = searchParams.get("date");
    const time = searchParams.get("time");
    const guests = Number(searchParams.get("guests"));

    if (!date || !time || !guests) {
      return NextResponse.json(
        {
          success: false,
          message: "date, time and guests are required",
        },
        { status: 400 }
      );
    }

    // Get reservations for selected slot
    const reservations = await Reservation.find({
      date,
      time,
      status: {
        $in: ["confirmed", "pending"],
      },
    });

    // Reserved table ids
    const reservedTableIds = reservations.map(
      (reservation) => reservation.tableId
    );

    // Available tables
    const availableTables = await Table.find({
      _id: {
        $nin: reservedTableIds,
      },
      capacity: {
        $gte: guests,
      },
      status: "available",
    });

    return NextResponse.json({
      success: true,
      count: availableTables.length,
      tables: availableTables,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to check availability",
      },
      { status: 500 }
    );
  }
}