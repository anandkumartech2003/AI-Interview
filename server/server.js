import dotenv from 'dotenv'
dotenv.config()
import jsonwebtoken from 'jsonwebtoken'
import cookiePareser from 'cookie-parser'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.js'
const app=express()
app.use(express.json())
app.use(cors())

//routes
app.use('/auth',authRoutes)
app.use('/auth',authRoutes)


const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is runnning in the 5000")
})

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("DB is connected")
}).catch((e)=>{
    console.log("mongodb connectio failed")
})