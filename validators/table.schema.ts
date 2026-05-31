import { z } from "zod";

export const tableSchema = z.object({
  tableNumber: z.coerce.number().min(1),
  capacity: z.coerce.number().min(1),
  status: z.enum([
    "available",
    "reserved",
    "maintenance",
  ]),
});

export type TableSchema = z.infer<typeof tableSchema>;