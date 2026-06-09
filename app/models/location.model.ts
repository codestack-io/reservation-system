import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    city: String,
  },
  { timestamps: true }
);

export default mongoose.models.Location ||
  mongoose.model("Location", LocationSchema);