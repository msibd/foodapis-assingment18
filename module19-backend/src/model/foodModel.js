// src/model/foodModel.js

const mongoose = require("mongoose");

const databaseSchema = mongoose.Schema(
  {
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    Category: { type: String },
    Price: { type: Number },
    Qty: { type: Number },
    CreatedDate: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

const foodModel = mongoose.model("foodProducts", databaseSchema);

module.exports = foodModel;
