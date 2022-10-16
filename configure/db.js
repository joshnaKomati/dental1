const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/Dental',()=>{
    console.log("db is conneted");
})