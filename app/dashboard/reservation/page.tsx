export default function ReservationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Reservations
      </h1>

      <p className="text-gray-500 mt-2">
        Manage all customer reservations here.
      </p>

      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <p>No reservations loaded yet.</p>
      </div>
    </div>
  );
}