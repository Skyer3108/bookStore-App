
const bcrypt=require('bcryptjs')
const userSchema=require('../Model/userSchema')

const Signup=async(req,res)=>{


    try{

        const {name,email,password}=req.body

        const user=await userSchema.findOne({email})

        if(user){
           return res.send({
                status:400,
                message:"User already Exists"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10)


        const newUser=new userSchema({
            name:name,
            email,
            password:hashedPassword,

        })

        await newUser.save()

      return  res.send({
            status:200,
            message:'User created successfully',
            user:{
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email
            },
        })




    }catch(err){

        console.log(err)

      return  res.send({
            status:400,
            err:err
        })

    }
}


const Login=async(req,res)=>{

    try{

        const {email,password}=req.body
      
        const userExists=await userSchema.findOne({email})
    

        const isMatch=await bcrypt.compare(password,userExists.password)

        if(!userExists||!isMatch){

            return res.send({
                status:400,
                message:"Password is not Matched"
            })
        }

        

        return res.send({

            status:200,
            message:"Login Successfully",
            user:{
                id:userExists._id,
                email:userExists.email,
                name:userExists.name
            }
        })
    }catch(err){

        console.log(err)
        return res.send({
            statsu:400,
           
            message:'Login error'
        })

    }
}

module.exports={Signup,Login}