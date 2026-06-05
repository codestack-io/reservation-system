import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Reservation from "../../models/reservations";

export async function GET() {
  try {
    await connectDB;

    const reservations = await Reservation.find();

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
    await connectDB;

    const body = await req.json();

    const reservation = await Reservation.create(body);

    return NextResponse.json(
      reservation,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create reservation" },
      { status: 500 }
    );
  }
}