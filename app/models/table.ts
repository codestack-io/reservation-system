// models/Table.ts
import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    tableNumber: Number,
    capacity: Number,
    status: {
      type: String,
      enum: ["available", "reserved", "maintenance"],
      default: "available",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Table ||
  mongoose.model("Table", TableSchema);