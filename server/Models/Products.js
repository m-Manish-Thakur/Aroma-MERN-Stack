const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  img: String,
  productName: String,
  category: String,
  price: Number,
  desc: String,
  gender: String,
  features: [String],
  ratings: Number,
});


const Products = mongoose.model("Products", productSchema);

module.exports = Products;