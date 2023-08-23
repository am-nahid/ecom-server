const { orderAdd, fetchOrder, deleteUserOrder,deleteAllOrder,fetchAllOrder } = require('../controller/OrdersDataBase')

const orderRoute = require('express').Router()

orderRoute.post('/order-add',orderAdd)
orderRoute.get('/order-user-detail/:user_id',fetchOrder)
orderRoute.get('/orders-detail',fetchAllOrder)
orderRoute.get('/order-delete/:user_id',deleteUserOrder)
orderRoute.get('/order-all-delete',deleteAllOrder)


module.exports = orderRoute