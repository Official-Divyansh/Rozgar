const express=require("express")
const LoginController=require("../../Controller/user/login/login.controller")

const LoginRouter=express.Router()

LoginRouter.route("/login").post(LoginController)

module.exports=LoginRouter