interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function StatusPage({
  params,
}: Props) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/reservations/${id}`,
    {
      cache: "no-store",
    }
  );

  const reservation =
    await res.json();

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Reservation Status
      </h1>

      <p>
        Name:
        {reservation.customerName}
      </p>

      <p>
        Date:
        {reservation.date}
      </p>

      <p>
        Time:
        {reservation.time}
      </p>

      <p>
        Status:
        {reservation.status}
      </p>
    </div>
  );
}