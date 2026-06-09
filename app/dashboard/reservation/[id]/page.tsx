import { connectDB } from "@/lib/db";
import Reservation from "@/app/models/reservations";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ReservationDetailsPage({
  params,
}: PageProps) {
  await connectDB();

  const reservation = await Reservation.findById(params.id).lean();

  if (!reservation) {
    return notFound();
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Reservation Details
      </h1>

      <div className="bg-white border rounded-lg p-6 space-y-4 shadow-sm">
        {/* Customer Name */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Customer Name</span>
          <span>{reservation.customerName || "N/A"}</span>
        </div>

        {/* Email */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Email</span>
          <span>{reservation.email || "N/A"}</span>
        </div>

        {/* Phone */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Phone</span>
          <span>{reservation.phone || "N/A"}</span>
        </div>

        {/* Guests */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Guests</span>
          <span>{reservation.guests || "N/A"}</span>
        </div>

        {/* Date */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Date</span>
          <span>
            {reservation.date
              ? new Date(reservation.date).toLocaleDateString()
              : "N/A"}
          </span>
        </div>

        {/* Time */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Time</span>
          <span>{reservation.time || "N/A"}</span>
        </div>

        {/* Status */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Status</span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold
              ${
                reservation.status === "confirmed"
                  ? "bg-green-100 text-green-700"
                  : reservation.status === "cancelled"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
          >
            {reservation.status || "pending"}
          </span>
        </div>

        {/* Special Request */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium">Special Request</span>
          <span className="text-right max-w-[60%]">
            {reservation.specialRequest || "None"}
          </span>
        </div>

        {/* Table Number */}
        <div className="flex justify-between">
          <span className="font-medium">Table Number</span>
          <span>
            {typeof reservation.tableId === "object"
              ? reservation.tableId?.tableNumber ||
                reservation.tableId?.name ||
                "N/A"
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}