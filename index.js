const express = require('express')
const dotenv = require("dotenv")
const cors = require('cors')
const UserRoute = require('./route/UserRoutes')
const mongoose = require('./config/dbWithMongoose')
const productRoute = require('./route/productFetchRoute')
const orderRoute = require('./route/orderRoute')

dotenv.config()

const app= express()

app.use(express.json())

app.use(cors({
    origin:'*'
}))

app.use('/user', UserRoute)
app.use('/api', productRoute)
app.use('/product',orderRoute)



app.get('/',(req,res)=>{
    res.send({
        message: "working fine"
    })
})


const port = process.env.PORT || 4040
app.listen(port,async ()=>{
    await mongoose()
    console.log(`Site is up and running on port ${port}`);
})