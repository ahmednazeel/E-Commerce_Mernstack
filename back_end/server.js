import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import products from './data/JustProductDB.js';
import connectDB from './config/db.js';

import productRouter from './routes/productRoutes.js'
import router from './routes/productRoutes.js';

dotenv.config()


connectDB()

const app = express();



app.use(cors())


app.get("/",(req,res)=>{
    res.send("API is running....")
})

app.use('/api/products', productRouter)

app.use((req,res,next)=> {
    res.status(404)
    res.json(`Not Found : ${req.originalUrl}`)
    next();
})

app.use((err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json("We Do Explore an Error")   
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server is running on ${process.env.NODE_ENV} mode ${PORT}`))














