"use client";

import TableCard from "./TableCard";

type Table = {
  _id: string;
  tableNumber: number;
  capacity: number;
  category: string;
  [key: string]: unknown;
};

interface Props {
  tables: Table[];
  selectedTableId: string;
  onSelect: (table: Table) => void;
}

export default function AvailableTables({
  tables,
  selectedTableId,
  onSelect,
}: Props) {
  if (!tables.length) {
    return (
      <p className="text-gray-500">
        No available tables found.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {tables.map((table) => (
        <TableCard
          key={table._id}
          table={table}
          selected={
            selectedTableId === table._id
          }
          onSelect={() => onSelect(table)}
        />
      ))}
    </div>
  );
}