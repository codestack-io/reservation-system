"use client";

import { useEffect, useState } from "react";
import TableLayout from "../tables/components/TableLayout";

interface Table {
  _id: string;
  tableNumber: number;
  capacity: number;
  status: "available" | "reserved" | "maintenance";
}

export default function ReservationsPage() {
  const [tables, setTables] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTables = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/tables");
      const data = await res.json();

      setTables(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  if (loading) return <p>Loading tables...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Reservations</h1>

      <div className="mt-6">
        <TableLayout tables={tables} />
      </div>
    </div>
  );
}