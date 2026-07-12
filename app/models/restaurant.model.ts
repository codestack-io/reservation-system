import mongoose, { Schema } from "mongoose";

const RestaurantSchema = new Schema(
  {
    name: String,
    slug: String,
    cuisine: String,
    rating: Number,
    reviews: Number,
    priceRange: String,
    image: String,
    coverImage: String,
    address: String,
    city: String,
    country: String,
    phone: String,
    email: String,
    openingHours: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    features: [String],
    description: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Restaurant ||
  mongoose.model("Restaurant", RestaurantSchema);