// Pre-remove hook
const mongoose = require("mongoose");

async function runRemoveHookDemo(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        const courseSchema = new mongoose.Schema;({
            title:String,
            tag:String
        });
        courseSchema.pre("deleteOne",{
            document:true,query:false
        },function(){
            console.log("Pre-delete Hook",this.title,);
        },);
    } catch (error) {
        
    }
}