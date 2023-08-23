const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    ide: Number,
    title: String,
    p_name: String,
    c_price: String,
    price: Number,
    description: String,
    features: String,
    preference: Number,
    search_category: String,
    category: String,
    image: String,
    rating: {
      cart_count: Number,
      rate: Number,
      count: Number,
    },
  });
  
  const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product;