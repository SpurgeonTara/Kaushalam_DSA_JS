import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  createdAt: { type: Date, default: Date.now },
});

export const Purchase = mongoose.model("Purchase", purchaseSchema);
