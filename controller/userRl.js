const userLogin=require("../model/userlogin")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
module.exports={
    newuser:async(req,res)=>{
        const {username,Password}=req.body
        await userLogin.create({username,Password})
        res.json({message:"user aded"})
    },
    userUpdate:async(req,res)=>{
        const{id,username,Password}=req.body
        const result=await userLogin.findByIdAndUpdate(id,{username,Password})
        res.json({message:"user detaills is updated"})
    },
    userlogin:async(req,res)=>{
        const {username,Password}=req.body
        const checkUsername= await userLogin.findOne({username})
        if(checkUsername){
            if(await bcrypt.compare(Password,checkUsername.Password)){
                const token=jwt.sign({username},'secretkey')
                res.json({message:"user logined",token})
                console.log(token);
            }else{
                res.json({message:'password is wrong'})
            }
        }else{
            res.json({message:"username is already exist"})
        }
    },
}