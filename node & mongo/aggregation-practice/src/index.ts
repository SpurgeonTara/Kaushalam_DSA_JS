import express from "express";
import mongoose from "mongoose";
import seedRoutes from "./routes/seed";
import analyticsRoutes from "./routes/analytics";

const app = express();
app.use(express.json());

app.use("/api", seedRoutes);
app.use("/api", analyticsRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/agg-practice").then(() => {
  app.listen(5000, () =>
    console.log("Server running at http://localhost:5000")
  );
});
