const express=require("express")
const RegisteRouter=require("./RegisteRouter")
const loginroter=require("./loginroter")
const mainRouter=express()
mainRouter.use("/user",RegisteRouter)
mainRouter.use("/main",loginroter)
module.exports=mainRouter