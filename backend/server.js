require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ CORS (VERY IMPORTANT)
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // frontend vercel URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// ✅ Connect DB safely
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend Server Running 🚀" });
});

// ❌ DO NOT use app.listen on Vercel
// app.listen(PORT)

// ✅ EXPORT app (THIS FIXES 500 ERROR)
module.exports = app;
