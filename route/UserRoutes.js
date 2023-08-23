const { register, login } = require('../model/user')

const route = require('express').Router()


route.post('/signup',register)
route.post('/login',login)




module.exports = route