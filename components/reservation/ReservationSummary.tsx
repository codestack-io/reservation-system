"use client";

import { Table } from "@/types/table.type";

interface Props {
  date: string;
  time: string;
  guests: number;
  table: Table;
}

export default function ReservationSummary({
  date,
  time,
  guests,
  table,
}: Props) {
  if (!table) return null;

  return (
    <div className="border rounded-xl p-5">
      <h2 className="font-bold mb-4">
        Reservation Summary
      </h2>

      <div className="space-y-2 text-sm">
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Guests: {guests}</p>
        <p>Table: {table.tableNumber}</p>
      </div>
    </div>
  );
}