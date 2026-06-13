const mongoose = require("mongoose");

async function connectDB() {
  try {
    if (!process.env.MONGO_URI) {
      return res.status(500).json({
        message: "MONGO_URI not found",
      });
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to database", err);
  }
}

module.exports = connectDB;
