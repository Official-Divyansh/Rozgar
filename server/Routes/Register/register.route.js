const express=require('express')
const userRegister=require("../../Controller/user/register/register.controller")

const ReisterRouter=express.Router()

ReisterRouter.route('/register').post(userRegister.userRegistration)

ReisterRouter.route("/allusers").get(userRegister.Getusers)

module.exports=ReisterRouter