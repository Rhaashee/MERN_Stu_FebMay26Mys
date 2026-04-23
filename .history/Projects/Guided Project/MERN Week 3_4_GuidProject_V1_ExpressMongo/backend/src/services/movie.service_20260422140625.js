const movie = require("../models/Movie");

// Create Movie 
exports.createMovie = async (data) => {
    return await Movie.create(data);
}