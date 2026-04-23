const Show = require("../models/Show");
const Movie = require("../models/Movie");

// Generate Seats
const generateSeats = (totalSeats) => {
    const seats = [];
    const rows = ["A","B","C","D","E","F","G","H"];
    let seatCount = 0;
    for(let row of rows){
        for(let i = 1; i<=10 ; i++){
            if(seatCount>=totalSeats) break;

            seats.push({
                seatNumber: `${row}${i}`,
                isBooked : false,
            });
            seatCount++;
        }
    }
    return seats
}