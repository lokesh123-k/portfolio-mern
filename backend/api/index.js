require("dotenv").config(); // MUST be first

const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db"); // 👈 FIXED PATH

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes (GO UP ONE LEVEL 👇)
app.use("/api/auth", require("../routes/auth"));

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Server Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
