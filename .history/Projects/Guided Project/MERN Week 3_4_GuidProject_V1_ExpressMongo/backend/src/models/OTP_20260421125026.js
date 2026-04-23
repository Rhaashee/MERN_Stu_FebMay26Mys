const { attempt } = require("lodash");
const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        index:true,
    },
    otp:{
        type:String,
        required:true,
        select:false,
    },
    expiresAt:{
        type:Date,
        required:true,
    },
    attempts:{
        type:Number,
        default:0,
    },
},{
    time
})