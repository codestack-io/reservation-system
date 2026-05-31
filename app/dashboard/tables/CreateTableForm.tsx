"use client";

import { createTableAction } from "@/actions/table.actions";

export default function CreateTableForm() {
  return (
    <form
      action={createTableAction}
      className="space-y-4"
    >
      <input
        type="number"
        name="tableNumber"
        placeholder="Table Number"
        className="border p-2 w-full"
      />

      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        className="border p-2 w-full"
      />

      <select
        name="status"
        className="border p-2 w-full"
      >
        <option value="available">
          Available
        </option>

        <option value="maintenance">
          Maintenance
        </option>
      </select>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2"
      >
        Add Table
      </button>
    </form>
  );
}