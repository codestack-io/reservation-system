"use client";

interface Table {
  _id: string;
  tableNumber: string;
  capacity: number;
  category: string;
}

interface Props {
  table: Table;
  selected: boolean;
  onSelect: () => void;
}

export default function TableCard({
  table,
  selected,
  onSelect,
}: Props) {
  return (
    <button
      onClick={onSelect}
      className={`border rounded-xl p-4 text-left transition ${
        selected
          ? "border-amber-500 bg-amber-50"
          : "border-gray-200"
      }`}
    >
      <h3 className="font-semibold">
        Table {table.tableNumber}
      </h3>

      <p className="text-sm text-gray-500">
        Capacity: {table.capacity}
      </p>

      <p className="text-sm text-gray-500">
        {table.category}
      </p>
    </button>
  );
}