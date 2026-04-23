const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie title is reqyired"],
        trim:true,
        index:true
    },
    genre:{
        type:String,
        required:[true,"Genre is required"],
        enum:[
            "Actio"
        ]
    }
})