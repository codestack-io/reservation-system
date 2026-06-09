"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface ReservationType {
  _id: string;
  customerName: string;
  email: string;
  tableId: {
    tableNumber?: string;
    name?: string;
  } | null;
  date?: string;
  status?: "pending" | "confirmed" | "cancelled";
}

export default function ReservationsTable({
  reservations,
}: {
  reservations: ReservationType[];
}) {
  const router = useRouter();

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-[color:var(--border)] rounded-xl overflow-hidden">
        
        {/* HEADER */}
        <thead className="bg-[color:var(--secondary)] text-[color:var(--foreground)]">
          <tr className="text-left text-sm font-semibold">
            <th className="p-3">Customer</th>
            <th className="p-3">Email</th>
            <th className="p-3">Table</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="bg-[color:var(--background)] text-[color:var(--foreground)]">
          {reservations.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-6 text-center text-sm opacity-70">
                No reservations found
              </td>
            </tr>
          ) : (
            reservations.map((res) => (
              <tr
                key={res._id}
                className="border-t border-[color:var(--border)]"
              >
                {/* Customer */}
                <td className="p-3 text-sm font-medium">
                  {res.customerName}
                </td>

                {/* Email */}
                <td className="p-3 text-sm opacity-80">
                  {res.email}
                </td>

                {/* Table */}
                <td className="p-3 text-sm">
                  {typeof res.tableId === "object"
                    ? res.tableId?.tableNumber ||
                      res.tableId?.name ||
                      "N/A"
                    : "N/A"}
                </td>

                {/* Date */}
                <td className="p-3 text-sm">
                  {res.date
                    ? new Date(res.date).toLocaleString()
                    : "N/A"}
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-medium
                      ${
                        res.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : res.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {res.status || "pending"}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex gap-2 text-sm flex-wrap">
                    <Link
                      href={`/dashboard/reservations/${res._id}`}
                      className="text-[color:var(--primary)] hover:underline"
                    >
                      View
                    </Link>

                    <Link
                      href={`/dashboard/reservations/edit/${res._id}`}
                      className="text-[color:var(--accent)] hover:underline"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(res._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}