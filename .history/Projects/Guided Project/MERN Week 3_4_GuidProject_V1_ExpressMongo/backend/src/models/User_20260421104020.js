const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,//trim is for remove extra spaces
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,//unique is for email should not repeat
        lowercase:true,//even if we enter in upper case it converts and stores in lower case
        match:[/^\s+@\s+\.\s+$/,"please use a valid email"],
        index:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:6,
        select:false,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },
    isVer
});