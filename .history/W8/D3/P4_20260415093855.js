// Basics of Embedding anf referencing
const mongoose = require("mongoose");

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.8:27')
    } catch (error) {
        
    }
}