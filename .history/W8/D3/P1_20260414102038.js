// Validation and Schema Constraints
const { StringSchema } = require("firebase/ai");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{type: Number, min:18},
    role:{type: String,
        enum: ["admin","user","manager"]
    },
    email:{
        type:String,
        match:/.+@
    }
})
