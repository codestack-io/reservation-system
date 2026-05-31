export interface Table {
  _id?: string;
  tableNumber: number;
  capacity: number;
  status: "available" | "reserved" | "maintenance";
  createdAt?: Date;
  updatedAt?: Date;
}