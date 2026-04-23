const { default: mongoose } = require("mongoose");

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const schema = new mongoose.Schema({
            name:String,
            
        })
    } catch (error) {
        
    }
}