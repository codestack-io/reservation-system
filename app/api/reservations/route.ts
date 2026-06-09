import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Reservation from "@/app/models/reservations";

export async function GET() {
  try {
    await connectDB(); // ✅ FIXED

    const reservations = await Reservation.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(reservations);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch reservations" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB(); // ✅ FIXED

    const body = await req.json();

    const reservation = await Reservation.create({
      ...body,
      status: body.status || "pending", // safe default
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create reservation" },
      { status: 500 }
    );
  }
}