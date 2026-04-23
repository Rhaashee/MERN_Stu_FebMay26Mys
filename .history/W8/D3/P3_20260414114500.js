// Pre-remove hook
const mongoose = require("mongoose");

async function runRemoveHookDemo(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");

        
    } catch (error) {
        
    }
}