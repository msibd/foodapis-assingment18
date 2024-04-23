const express = require("express");
const mongoose = require("mongoose");
const hpp = require("hpp");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const path = require("path");
const router = require("./src/routes/api");
require("dotenv").config();
const app = new express();
//security implement
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(express.json({ limit: "20MB" }));
app.use(express.urlencoded({ extended: true }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);
app.use(cookieParser());
app.set("etag", false);

app.use("/api", router);

// MongoDB Connection
const URL = process.env.MONGODB_URI;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Database connection established!");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

//404 not found function
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", message: "404 not found" });
});
module.exports = app;
