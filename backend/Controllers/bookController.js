const bookSchema=require('../Model/bookSchema')

const bookController=async(req,res)=>{

    try{

        // const {name,price,category,image,title,}=req.body


        // const newbook=new bookSchema({
        //     name,
        //     title,
        //     price,
        //     category,
        //     image
        // })

        // const db=await newbook.save()

        const book=await bookSchema.find()

        res.send({
            status:200,
            data:book
        })

    }catch(err){

        res.send({
            status:400,
            err
        })

    }
}

const bookAdd=async(req,res)=>{
    try{

         const {name,price,category,image,title,}=req.body


        const newbook=new bookSchema({
            name,
            title,
            price,
            category,
            image
        })

        const db=await newbook.save()


        return res.send({

            status:200,
            message:'Data Added',
            data:db,

        })


    }catch(err){

        res.send({
            status:400,
            err
        })

    }
}

module.exports={bookController,bookAdd}