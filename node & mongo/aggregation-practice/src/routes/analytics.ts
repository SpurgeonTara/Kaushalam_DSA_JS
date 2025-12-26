import { Router } from "express";
import { Purchase } from "../models/Purchase";
import { Product } from "../models/Product";

const router = Router();

router.get("/sales-per-product", async (_req, res) => {
  const resultOld = await Product.aggregate([
    {
      $unwind: "$tags",
    },
    {
      $group: {
        _id: null,
        uniqueTags: { $addToSet: "$tags" },
      },
    },
  ]);

  const resultOld2 = await Purchase.aggregate([
    {
      $group: {
        _id: "$productId",
        totalPurchase: { $sum: 1 },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "productsData",
      },
    },
    {
      $unwind: "$productsData",
    },
    {
      $project: {
        _id: "$_id",
        totalPurchase: "$totalPurchase",
        productsName: "$productsData.name",
      },
    },
  ]);

  // find all products with tag design
  const resultOld3 = await Product.aggregate([
    {
      $match: {
        tags: "design",
      },
    },
  ]);

  // Each Category with average price of products
  const result4 = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        average: { $avg: "$price" },
      },
    },
  ]);

  // Get a list of users along with the names and prices of products they have purchased.
  const resultOld5 = await Purchase.aggregate([
    {
      $group: {
        _id: "$userId",
        products: {
          $push: "$productId",
        },
      },
    },
    { $unwind: "$products" },
    {
      $lookup: {
        from: "products",
        localField: "products",
        foreignField: "_id",
        as: "productsData",
      },
    },
    {
      $unwind: "$productsData",
    },
    {
      $group: {
        _id: "$_id",
        products: {
          $push: "$productsData",
        },
      },
    },
  ]);

  // Find users who have purchased more than one product
  const result7 = await Purchase.aggregate([
    {
      $group: {
        _id: "$userId",
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ]);

  // Get a list of all users who purchased products in the "Audio" category.
  const result = await Purchase.aggregate([
    {
      $group: {
        _id: "$userId",
        products: {
          $push: "$productId",
        },
      },
    },
    {
      $unwind: "$products",
    },
    {
      $lookup: {
        from: "products",
        localField: "products",
        foreignField: "_id",
        as: "productData",
      },
    },
    {
      $unwind: "$productData",
    },
    {
      $match: {
        "productData.category": "Audio",
      },
    },
    {
      $group: {
        _id: "$_id",
        products: { $push: "$productData" },
      },
    },
  ]);

  res.json(result);
});

export default router;
