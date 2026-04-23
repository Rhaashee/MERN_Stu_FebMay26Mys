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
        articleSchema.pre("save",function(){
            this.title = this.title.trim();
            console.log("pre-save hook: tittle normalized before save");
        });
        articleSchema.post("save",function)
    } catch (error) {
        
    }
}