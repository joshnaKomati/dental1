const express=require('express')
const usermodel=require('../model/user_reg')
const userController=require("../controller/userController")
const {personvalidate,verifytoken}=require("../middleware/person")
const RegisteRouter=express()
RegisteRouter.post("/add",userController.newperson),
RegisteRouter.put("/update",personvalidate,userController.personUpdate)
module.exports=RegisteRouter