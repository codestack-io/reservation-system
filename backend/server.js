import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectDB from "./config/db.js";

dotenv.config();
console.log("🔥 MONGO_URI =", process.env.MONGO_URI);

const app = express();

// middleware
app.use(cors({
   origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}

));
app.use(express.json());

// DB connection
connectDB()
.then(() => console.log("DB connected"))
  .catch((err) => {
    console.error("DB error:", err);
  });

// routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});