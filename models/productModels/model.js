const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },  
    price: {
      type: Number,
      required: true,
    },
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee"
    },    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
