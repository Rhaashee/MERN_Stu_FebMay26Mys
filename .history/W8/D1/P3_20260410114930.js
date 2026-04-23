// 
const mongoose = require("mongoose");

async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
                console.log("MongoDB connected successfully")
    }
}