const usermodel=require("../model/user_reg")
module.exports={
    newperson:async(req,res)=>{
        const {Firstname,Lastname,Job_Title,Email,Password,Confirm_password}=req.body
        await usermodel.create({Firstname,Lastname,Job_Title,Email,Password,Confirm_password})
        res.json({message:"person information is added"})
    },
    
    personUpdate:async(req,res)=>{
        const{Firstname,Lastname,Job_Title,Email,Password,Confirm_password,id}=req.body
        const checkId=await usermodel.findById(id)
        console.log(id);
        if(checkId){
            await usermodel.findByIdAndUpdate(id,{Firstname,Lastname,Job_Title,Email,Password,Confirm_password})
            res.json({message:"person details is updated",checkId})
        }else{
            res.json({message:'person detils does not updated'})
        }
    },
}