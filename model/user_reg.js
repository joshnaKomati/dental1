const mongoose=require("mongoose")
const usermodel=new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Job_Title:String,
    Email:String,
    Password:String,
    Confirm_password:String,
})
module.exports=new mongoose.model("Register",usermodel)