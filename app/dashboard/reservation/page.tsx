import { connectDB } from "@/lib/db";
import Reservation from "@/app/models/reservations";
import ReservationsTable from "./reservationsTable";
import Link from "next/link";

export default async function ReservationsPage() {
  await connectDB();

  const reservations = await Reservation.find()
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="p-6 space-y-6  mx-auto">
      <h1 className="text-2xl font-semibold text-[color:var(--foreground)]">
        Reservations
      </h1>
       <Link
        href="/dashboard/reservation/create"
         className="px-4 py-2 rounded-xl bg-[color:var(--primary)] text-white text-sm"
      >
      + New Reservation
     </Link>

      <ReservationsTable reservations={JSON.parse(JSON.stringify(reservations))} />
    </div>
  );
}