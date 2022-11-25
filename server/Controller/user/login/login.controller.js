const userModel=require("../../../Models/User.model")
const bcrypt=require('bcrypt')
const {CreateToken}=require("../../../utils/jwt")

async function LoginController(req,res){
    try{
        const {email,password}=req.body
        if(email && password){
             const findUser=await userModel.findOne({email})
             if(findUser){
                    const data=await bcrypt.compareSync(password,findUser.password)
                    if(data){
                        const token=CreateToken({email:findUser.email,id:findUser._id})
                        res.status(200).json({
                            result:true,
                            msg:findUser,
                            token
                        })
                    }else{
                        res.status(400).json({
                            result:false,
                            msg:"password Incorrect."
                        })
                    }   
             }else{
                res.status(404).json({
                    result:false,
                    msg:"User Does not Exist."
                })
             }
        }else{
            res.status(400).json({
                result:false,
                msg:"All parameters resquried"
            })
        }
    }catch(err){
        console.log(err)
        res.status(404).json({
            result:false,
            msg:err
        })
    }
}

module.exports=LoginController