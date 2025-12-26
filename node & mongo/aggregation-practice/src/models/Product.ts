import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  tags: [String],
});

export const Product = mongoose.model("Product", productSchema);
