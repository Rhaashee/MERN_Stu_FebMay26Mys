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
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required:true,
        index:true
    },
    date:{
        type:Date,
        required:true,
        index:true,
    },
    time:{
        type:String,
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true
    },
    availableSeats:{
        type:Number,
        required:true,
    },
    seat:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
},{
    
})