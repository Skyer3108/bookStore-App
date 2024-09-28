const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MONGODB CONNECTED SUCESSFULLY')
}).catch((err)=>{
    console.log("ERROR",err)
})