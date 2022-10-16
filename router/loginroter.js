const express=require("express")
const userLogin=require("../model/userlogin")
const userRl=require("../controller/userRl")
const{verifytoken}=require("../middleware/login")
const loginroter=express()
loginroter.post("/added",userRl.newuser)
loginroter.put("/update",userRl.userUpdate)
loginroter.post("/login",userRl.userlogin)
module.exports=loginroter
