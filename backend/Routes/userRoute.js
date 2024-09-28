const express=require('express')
const { Signup, Login } = require('../Controllers/userContoller')


const userRouter=express.Router()


userRouter.post('/signup',Signup)

 userRouter.post('/login',Login)

module.exports=userRouter

