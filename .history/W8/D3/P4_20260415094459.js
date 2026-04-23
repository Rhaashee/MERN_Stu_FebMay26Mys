// Basics of Embedding anf referencing
const mongoose = require("mongoose");

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });
        // inside of 
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema]
        });
    } catch (error) {
        
    }
}