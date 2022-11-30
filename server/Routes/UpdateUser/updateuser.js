const express=require("express")
const { protect } = require("../../Middleware/Auth")
const updateuser=express.Router()

const UpdateUserController=require("../../Controller/user/UpdateUser/UpdateUserController")

updateuser.patch("/updateuser",protect,UpdateUserController.UpdateUserController)

module.exports=updateuser