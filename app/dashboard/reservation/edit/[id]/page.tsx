import { connectDB } from "@/lib/db";
import Reservation from "@/app/models/reservations";
import ReservationForm from "@/components/reservation/ReservationForm";
import { notFound } from "next/navigation";

export default async function EditReservationPage({
  params,
}: {
  params: { id: string };
}) {
  await connectDB();

  const reservation = await Reservation.findById(params.id).lean();

  if (!reservation) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Edit Reservation
      </h1>

      <ReservationForm initialData={JSON.parse(JSON.stringify(reservation))} />
    </div>
  );
}