const express = require("express");
const cookeParser = require("cookie-parser");
const authRoutes = require("./routes/auth.route");
const habitRoutes = require("./routes/habits.route");
const cors = require("cors");

const app = express();
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
].filter(Boolean);

app.use(express.json());
app.use(cookeParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);

module.exports = app;
