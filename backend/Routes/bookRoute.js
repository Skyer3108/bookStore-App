const express=require('express')
const { bookController, bookAdd } = require('../Controllers/bookController')

const BookRoute=express.Router()

BookRoute.get('/book',bookController)


BookRoute.post('/addbook',bookAdd)


module.exports=BookRoute