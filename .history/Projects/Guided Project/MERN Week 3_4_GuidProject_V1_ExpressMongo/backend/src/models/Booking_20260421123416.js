const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    showId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Show",
        required:true,
    },
    seats:{
        type:[String],
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["booked","cancelled"],
        default:"booked",
        index:true
    }
})