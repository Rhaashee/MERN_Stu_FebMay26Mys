// cancel.js : To cancel the existing booking if exists
const bookingEmitter = require("./events");
const{getCurrentBooking,clearCurrentBooking} = require("./booking");

function cancelBooking(movies){
    const booking = getCurrentBooking();
    if (!booking) {
        bookingEmitter.emit("bookingFailed","No Booking found to cancel.");
        return null;
    }
    const movie = movies.find((m) => m.id === booking.movieId);
    if (!movie) {
        bookingEmitter.emit("bookingFailed","Movie data not found while Cancelling booking");
        return null;
    }
    const showtime = movie.showtimes.find((show) => show.time.tolowercase()===booking.time.tolowercase);
    if (!showtime) {
        bookingEmitter.emit("bookingFailed","Showtime data not found");
        return null;
    }

    // restore seats 
    showtime.seatsAvailable += booking.seatCount; 

    // clear current Booking
    clearCurrentBooking();

    bookingEmitter.emit("bookingCancelled",booking);

    return booking;
}

module.exports = {
    cancelBooking
};
