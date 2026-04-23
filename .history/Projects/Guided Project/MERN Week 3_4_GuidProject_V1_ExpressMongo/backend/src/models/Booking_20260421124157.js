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
        index:true,
    },
    bookingTime:{
        type:Date.now(),
    }
},{
    timestamps:true
});

// Add validation
bookingSchema.pre("save",function(next) {
    if(this.seats.length === 0){
        return next(new Error("Atleast one seat must be selected"));
    }
    if(this.totalSeats!=this.seats.length){
        return next(new Error("Seat Count mismatch"));
    }
    next();
});

// Compound Index
bookingSchema.index({userId:1})