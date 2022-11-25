const express=require("express")
const forgotpass=express.Router()
const forgotPasswordController=require("../../Controller/ForgotPassword/forgotPassword.controller")

forgotpass.route("/forgotpass/email").post(forgotPasswordController.VerifyEmailAndSendOtp)

forgotpass.route("/forgotpass/verifyotp").post(forgotPasswordController.ForgotPasswordVerifyOtp)

forgotpass.route("/forgotpass/resetpass").post(forgotPasswordController.ResetUserPassword)

module.exports=forgotpass