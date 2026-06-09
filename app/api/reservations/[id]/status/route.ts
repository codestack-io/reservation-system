import { connectDB } from "@/lib/db";
import Reservation from "@/app/models/reservations";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { status } = await req.json();

    const updated = await Reservation.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

    return NextResponse.json({
      success: true,
      data: updated,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}