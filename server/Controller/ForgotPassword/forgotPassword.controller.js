const userModel=require("../../Models/User.model")
const otpVerificationModel=require("../../Models/otpVerificationModel")
const bcrypt=require('bcrypt')
const initiatemail=require("../../utils/NodeMailer")

var useremail=''
async function VerifyEmailAndSendOtp(req,res){
    const email=req.body.email
    useremail=email
    const checkUser=await userModel.findOne({email})
    if(checkUser){
       try{
        const randomOTP=Math.floor(100000+Math.random()*900000)
        if(email){
            initiatemail(email,'Confirmation Code','OTP GENERATIOCN','template',randomOTP,email)
            const response=new otpVerificationModel({
                email:email,
                otp:randomOTP,
                dueTime:10
            })
            await response.save()
            setTimeout(ExpiryOtptime,90000)
            res.status(200).send({
                message:"otp sent successfully",
                result:true
            })
       }else{
        res.status(404).send({
            message:"Email required",
            result:"false"
        })
  
    }
       }catch(err){
            res.status(404).send({
                message:err,
                result:"false"
            })
       }
    }else{
        res.status(404).send({
            message:"Email you are providing does not exist",
            result:"false"
        })
    }
}

async function ForgotPasswordVerifyOtp(req,res){
    const otp=req.body.otp
    try{
        if(otp!==""){
       const otpverification=await otpVerificationModel.find({email:useremail})
       
       if(otpverification[0].otp==otp){
           res.send({
            message:"otp matches",
            result:"true"
           })

       }else{
        res.send({
            message:"otp does not match",
            result:"false"
        })
       }
    }
    }catch(err){
        res.status(404).send({
            message:err,
            result:"false"
        })
    }
}

async function ResetUserPassword(req,res){
    const password=req.body.password
    try{
        const ResetUserPass=await userModel.findOneAndUpdate({email:useremail},
            {password:bcrypt.hashSync(password,10)})
        if(ResetUserPass){
            res.status(200).send({
                message:"Successfully Reset password",
                result:"true"
            })
        }
    }catch(err){
        res.status(404).send({
            message:err,
            result:"false"
        })
    }
}
async function ExpiryOtptime(){
    try{
        const removeotp=await otpVerificationModel.findOneAndDelete({email:useremail})
        console.log("removed successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports={
    VerifyEmailAndSendOtp,
    ForgotPasswordVerifyOtp,
    ResetUserPassword
}