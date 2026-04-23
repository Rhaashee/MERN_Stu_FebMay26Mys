// 
const mongoose = require("mongoose");

async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/");
        console.log("MongoDB connected successfully");
    }
}