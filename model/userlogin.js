const mongoose=require("mongoose")
const userLogin=new mongoose.Schema({
    username:String,
    Password:String,
})
module.exports=new mongoose.model('login',userLogin)