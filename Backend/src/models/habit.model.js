const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly"],
      default: "daily",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      
    },
    completedDates: [String],
  },
  { timestamps: true },
);
module.exports = mongoose.model("Habit", habitSchema);
