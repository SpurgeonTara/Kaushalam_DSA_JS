import { Router } from "express";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { Purchase } from "../models/Purchase";

const router = Router();

router.post("/seed", async (_req, res) => {
  await Product.deleteMany({});
  await User.deleteMany({});
  await Purchase.deleteMany({});

  const users = await User.insertMany([
    { name: "Alice", email: "alice@mail.com" },
    { name: "Bob", email: "bob@mail.com" },
    { name: "Charlie", email: "charlie@mail.com" },
    { name: "David", email: "david@mail.com" },
    { name: "Eva", email: "eva@mail.com" },
    { name: "Frank", email: "frank@mail.com" },
    { name: "Grace", email: "grace@mail.com" },
    { name: "Hannah", email: "hannah@mail.com" },
    { name: "Ian", email: "ian@mail.com" },
    { name: "Jane", email: "jane@mail.com" },
  ]);

  const products = await Product.insertMany([
    {
      name: "Photo Editor",
      price: 30,
      category: "Software",
      tags: ["design", "photo"],
    },
    {
      name: "Code Snippets",
      price: 15,
      category: "Development",
      tags: ["code", "snippet"],
    },
    {
      name: "Music Pack",
      price: 20,
      category: "Audio",
      tags: ["sound", "music"],
    },
    {
      name: "Resume Builder",
      price: 10,
      category: "Productivity",
      tags: ["resume", "career"],
    },
    {
      name: "Video Templates",
      price: 25,
      category: "Video",
      tags: ["video", "template"],
    },
    {
      name: "UI Kit",
      price: 35,
      category: "Design",
      tags: ["ui", "components"],
    },
    {
      name: "Sound FX Pack",
      price: 18,
      category: "Audio",
      tags: ["fx", "sound"],
    },
    {
      name: "Ebook Bundle",
      price: 12,
      category: "Education",
      tags: ["book", "pdf"],
    },
    {
      name: "Dev Tools Pack",
      price: 40,
      category: "Development",
      tags: ["tools", "dev"],
    },
    {
      name: "Blog Templates",
      price: 22,
      category: "Web",
      tags: ["blog", "template"],
    },
  ]);

  const purchases = await Purchase.insertMany([
    { userId: users[0]._id, productId: products[0]._id },
    { userId: users[1]._id, productId: products[0]._id },
    { userId: users[2]._id, productId: products[1]._id },
    { userId: users[3]._id, productId: products[2]._id },
    { userId: users[4]._id, productId: products[2]._id },
    { userId: users[5]._id, productId: products[3]._id },
    { userId: users[6]._id, productId: products[4]._id },
    { userId: users[7]._id, productId: products[5]._id },
    { userId: users[8]._id, productId: products[6]._id },
    { userId: users[9]._id, productId: products[7]._id },
    { userId: users[0]._id, productId: products[8]._id },
    { userId: users[1]._id, productId: products[8]._id },
    { userId: users[2]._id, productId: products[9]._id },
    { userId: users[3]._id, productId: products[9]._id },
    { userId: users[4]._id, productId: products[1]._id },
    { userId: users[5]._id, productId: products[4]._id },
    { userId: users[6]._id, productId: products[0]._id },
    { userId: users[7]._id, productId: products[1]._id },
    { userId: users[8]._id, productId: products[2]._id },
    { userId: users[9]._id, productId: products[3]._id },
    { userId: users[0]._id, productId: products[5]._id },
    { userId: users[1]._id, productId: products[6]._id },
    { userId: users[2]._id, productId: products[7]._id },
  ]);

  res.send({
    usersCount: users.length,
    productsCount: products.length,
    purchasesCount: purchases.length,
  });
});

export default router;
