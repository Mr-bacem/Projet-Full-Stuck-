const mongoose = require('mongoose');
const Product = require('../Product/product.model');
const User = require('../users/user.model');

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product", // Update this to match the actual name of your Product model
      },
    ],
    payment: String,
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    status: { 
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "delivered", "cancel"],
    },
  },
  { timestamps: true }
);




const Order = mongoose.model("Order", orderSchema);
module.exports = Order;