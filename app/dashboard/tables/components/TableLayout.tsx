type TableType = {
  _id: string;
  tableNumber: number;
  capacity: number;
  status: "available" | "reserved" | "maintenance";
};

interface TableLayoutProps {
  tables: TableType[];
}

export default function TableLayout({
  tables,
}: TableLayoutProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {tables.map((table) => (
        <div
          key={table._id}
          className={`
            h-28
            w-28
            rounded-full
            flex
            flex-col
            items-center
            justify-center
            border-4
            shadow-md
            transition-all
            hover:scale-105
            cursor-pointer

            ${
              table.status === "available"
                ? "bg-green-100 border-green-500"
                : table.status === "reserved"
                ? "bg-red-100 border-red-500"
                : "bg-yellow-100 border-yellow-500"
            }
          `}
        >
          <h3 className="font-bold text-lg">
            T{table.tableNumber}
          </h3>

          <p className="text-xs">
            {table.capacity} Seats
          </p>

          <span
            className={`text-xs font-semibold ${
              table.status === "available"
                ? "text-green-700"
                : table.status === "reserved"
                ? "text-red-700"
                : "text-yellow-700"
            }`}
          >
            {table.status}
          </span>
        </div>
      ))}
    </div>
  );
}