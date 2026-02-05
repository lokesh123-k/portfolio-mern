const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("ℹ️ MongoDB already connected");
      return;
    }

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "portfolio",
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // clean exit
  }
};

module.exports = connectDB;
