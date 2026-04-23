// Pre-save and post-save Hooks
const mongoose = require("mongoose");

async function runSaveHookDemo(){
    try {
        await mongoose.connect("mongodb://127.0.0.1")
    } catch (error) {
        
    }
}