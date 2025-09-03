// server.js (Full Backend Setup)

// ================== Imports ==================
import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// ================== Config ==================
dotenv.config();
const PORT = process.env.PORT || 6000;
const app = express();

// ================== Middlewares ==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Correct CORS setup
app.use(
  cors({
    origin: [
      "https://nexzenow.com",          // main frontend
      "https://nexznow-adminpanel.vercel.app", // admin panel
      "http://localhost:5173",        // local dev
    ],
    credentials: true,
  })
);

// ================== Routes ==================
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

// ================== Root Check ==================
app.get("/", (req, res) => {
  res.send({
    activeStatus: true,
    message: "✅ Nexzen Backend is running fine!",
  });
});

// ================== Server Start ==================
const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server", err);
    process.exit(1);
  }
};

start();
