
import { getTables } from "../../services/table.service";
import CreateTableForm from "./CreateTableForm";
import TableLayout from "./components/TableLayout";

type Table = {
  _id: string;
  id?: string;
  tableNumber: number;
  capacity: number;
  status: 'available' | 'reserved' | 'maintenance';
  [key: string]: unknown;
};

export default async function TablesPage() {
  const tables = (await getTables()) as unknown as Table[];

  const totalTables = tables.length;

  const availableTables = tables.filter((table: Table) => table.status === "available").length;

  const reservedTables = tables.filter((table: Table) => table.status === "reserved").length;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Table Management
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h3>Total Tables</h3>
          <p className="text-3xl font-bold">
            {totalTables}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3>Available</h3>
          <p className="text-3xl font-bold text-green-600">
            {availableTables}
          </p>
        </div>

        <div className="border rounded-lg p-4">
          <h3>Reserved</h3>
          <p className="text-3xl font-bold text-red-600">
            {reservedTables}
          </p>
        </div>
      </div>

      <CreateTableForm />

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Restaurant Floor
        </h2>

        <TableLayout
  tables={tables}
  onSelectTable={() => {}}
/>
      </div>
    </div>
  );
}