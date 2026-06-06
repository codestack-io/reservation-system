import mongoose from "mongoose";
import Location from "../models/location";
import { locations } from "../data/location";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    await Location.deleteMany();

    await Location.insertMany(locations);

    console.log("Locations seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();