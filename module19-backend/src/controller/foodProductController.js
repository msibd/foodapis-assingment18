// src/controller/foodProductController.js

const foodModel = require("../model/foodModel");

exports.createFood = (req, res) => {
  const reqBody = req.body;

  foodModel
    .create(reqBody)
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(500).json({ status: "error", message: err.message });
    });
};

exports.readFood = (req, res) => {
  foodModel
    .find()
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404).json({ status: "error", message: err });
    });
};

exports.readFoodOne = (req, res) => {
  const { id } = req.params;

  foodModel
    .findOne({ _id: id })
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404).json({ status: "error", message: err });
    });
};

exports.updateFood = (req, res) => {
  const { id } = req.params;
  const reqBody = req.body;

  foodModel
    .updateOne({ _id: id }, reqBody)
    .then((result) => {
      res.status(200).json({ status: "success", data: result });
    })
    .catch((err) => {
      res.status(404).json({ status: "error", message: err });
    });
};

exports.deleteFood = (req, res) => {
  const { id } = req.params;

  foodModel
    .deleteOne({ _id: id })
    .then(() => {
      res
        .status(200)
        .json({ status: "success", message: "Successfully deleted" });
    })
    .catch((err) => {
      res.status(404).json({ status: "error", message: err });
    });
};
