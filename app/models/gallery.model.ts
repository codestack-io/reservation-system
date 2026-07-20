import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGallery extends Document {
  name: string;
  gallery: string[];
}

const GallerySchema = new Schema<IGallery>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    gallery: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    collection: "gallery",
  }
);

const Gallery: Model<IGallery> =
  mongoose.models.Gallery ||
  mongoose.model<IGallery>("Gallery", GallerySchema);

export default Gallery;