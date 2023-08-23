const mongoose = require('mongoose')

const orderSucessSchema = new mongoose.Schema({
    cartItems: Object,
    cartTotalAmount: Number,
    cartTotalQuantity:Number,
    user_id: String ,
    orderDate: String, 
    orderTime: String,
})

const Orders = mongoose.model('Orders', orderSucessSchema);

module.exports = Orders