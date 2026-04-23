const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true,
    },
    isBooked
})