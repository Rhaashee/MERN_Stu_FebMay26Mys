// Pre-save and post-save Hooks
const mongoose = require("mongoose");

async function runSaveHookDemo(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        const articleSchema = new mongoose.Schema({
            title:String,
            category:String,
            tag:String
        });
        ar
    } catch (error) {
        
    }
}