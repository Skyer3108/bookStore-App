
const express=require('express')
const dotenv=require('dotenv').config()

const cors=require('cors')

const db=require('./config/db')

const BookRoute=require('./Routes/bookRoute')
const userRouter = require('./Routes/userRoute')
const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||5000

app.use('/api',BookRoute)
app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log(`Server is Running on the PORT :${PORT}`)
})
