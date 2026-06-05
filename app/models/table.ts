import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    tableNumber: String, // Changed to string to support names like "01A", "02C" from table.webp
    capacity: Number,
    category: {
      type: String,
      enum: ["Regular", "VIP", "Smoking Room", "Dinner"],
      default: "Regular",
    },
    status: {
      type: String,
      enum: ["available", "reserved", "maintenance"],
      default: "available",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Table || mongoose.model("Table", TableSchema);