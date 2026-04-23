const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie title is reqyired"],
        trim
    }
})