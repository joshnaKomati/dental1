const usermodel=require("../model/user_reg")
const userController=require("../controller/userController")
const Joi=require("joi")
const jwt=require("jsonwebtoken")
module.exports={
    personvalidate:async(req,res,next)=>{
        const Schema=Joi.object({
            Firstname:Joi.string().required(),
            Lastname:Joi.string().required(),
            Job_Title:Joi.string().required(),
            Email:Joi.string().required(),
            Password:Joi.string().required(),
            Confirm_password:Joi.string().required(),
            id:Joi.optional(),
        })
        const result=Schema.validate(req.body)
        if(result.error){
       res.json({message:result.error.details[0].message})
        }else{
        next()
        }
    },
  
}