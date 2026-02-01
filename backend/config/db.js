const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "portfolio", // optional but recommended
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    throw new Error("MongoDB connection failed");
  }
};

module.exports = connectDB;
