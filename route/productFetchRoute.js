const {fetchAllProduct, fetchProductBySC, productAdd, fetchProductByCat, search } = require('../model/productModel')

const productRoute = require('express').Router()

// productRoute.get('/product/add',productAdd)
productRoute.get('/products',fetchAllProduct)
productRoute.get('/product/:cat/:search_category',fetchProductBySC)
productRoute.get('/product/:cat',fetchProductByCat)
productRoute.get('/search',search)


module.exports = productRoute