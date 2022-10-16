const  userRl=require("../controller/userRl")
const userLogin=require("../model/userlogin")
const Joi=require("joi")
const jwt=require("jsonwebtoken")
module.exports={
    verifytoken:async(req,res,next)=>{
        const bearerHeaders=req.headers['authorization']
        if(typeof bearerHeaders !=='undefined'){
                    try {
                const data=jwt.verify(bearerHeaders,'secretkey')
                const result=await userLogin.findOne({username:data.username})
                if(result){
                    next()
                }else{
                    res.json({message:"email is not valid"})
                }
            } catch (error) {
                res.json({message:error.message})
            }
        }else{
            res.json({message:'mentioned valid token'})
        }
    }
}