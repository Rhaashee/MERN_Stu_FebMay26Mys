const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true,
    },
    isBooked:{
        type:Boolean,
        default:false,
    }
},{_id:false});

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId
    }
})