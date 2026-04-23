// 
const mongoose = require("mongoose");

async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const studentSchema = new mongoose.Schema({
                    name: String,
                    price: Number,
                    category: String,
                    
                });
    }
}