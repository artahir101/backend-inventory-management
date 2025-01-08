const Product = require("../../models/productModels/model");

module.exports = {
  create: async (req, res) => {
    try {
      await new Product(req.body).save();
      res.status(200).json({
        message: "Product created successfully"
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  get: async (req, res) => {
    try {
      const data = await Product.find();
      res.status(200).json({
        message: "Products fetched successfully",
        data
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  getMadeBy: async (req, res) => {
    try {
      const data = await Product.find().populate("madeBy");
      res.status(200).json({
        message: "Products with made by details fetched successfully",
        data
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  update: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.query.id, req.body);
      res.status(200).json({
        message: "Product updated successfully",
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  },
  delete: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.query.id);
      res.status(200).json({
        message: "Product deleted successfully",
      })
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
  }
};