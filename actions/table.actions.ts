"use server";

import { revalidatePath } from "next/cache";

type TableStatus = "available" | "reserved" | "maintenance";

async function createTable(params: {
  tableNumber: number;
  capacity: number;
  status: TableStatus;
}) {
  // Implement table creation logic here.
}

async function deleteTable(id: string) {
  // Implement table deletion logic here.
}

export async function createTableAction(
  formData: FormData
) {
  await createTable({
    tableNumber: Number(
      formData.get("tableNumber")
    ),
    capacity: Number(
      formData.get("capacity")
    ),
    status: String(
      formData.get("status")
    ) as
      | "available"
      | "reserved"
      | "maintenance",
  });

  revalidatePath("/dashboard/tables");
}

export async function deleteTableAction(
  id: string
) {
  await deleteTable(id);

  revalidatePath("/dashboard/tables");
}