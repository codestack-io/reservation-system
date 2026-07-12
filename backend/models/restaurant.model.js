import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
    },

    city: {
      type: String,
    },

    country: {
      type: String,
    },

    cuisine: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Restaurant",
  restaurantSchema
);