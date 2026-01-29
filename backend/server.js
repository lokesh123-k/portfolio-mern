require("dotenv").config(); // 🔥 MUST BE FIRST

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/auth"));
//app.use("/api/contact", require("./routes/contact"));

app.get("/", (req, res) => {
  res.send("Portfolio Backend Server Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
  //console.log("JWT_SECRET:", process.env.JWT_SECRET); // 🔍 DEBUG LINE
});
