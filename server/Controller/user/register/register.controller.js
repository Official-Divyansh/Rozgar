const userModel=require("../../../Models/User.model")
const bcrypt=require('bcrypt')
const {CreateToken}=require("../../../utils/jwt")

async function userRegistration(req,res){
    try{
         const {name,email,password}=req.body
         if(name && email && password){
               const findUser=await userModel.findOne({email})
               if(!findUser){
                 const data=new userModel({
                    name,
                    email,
                    password:bcrypt.hashSync(password,10)
                 })
                 if(data){
                     await data.save()
                     const token=CreateToken({email:data.email,id:data._id})  
                     res.status(201).json({
                         result:true,
                         data,
                         token
                        })
                    }
               }else{
                res.status(400).json({
                    result:false,
                    msg:"User with this email Already Registered"
                })
               } 
         }else{
            res.status(400).json({
                result:false,
                msg:"All fields are Mandatory."
            })
         }  
    }catch(err){
        console.log(err)
        res.status(500).json({
            result:false,
            msg:err
        })
    }
}

async function Getusers(req,res){
    try{
        const allusers=await userModel.find({})
        if(allusers){
            res.status(200).json({
                result:true,
                data:allusers
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            result:false,
            msg:err
        })
    }
}

module.exports={
    userRegistration,
    Getusers
}