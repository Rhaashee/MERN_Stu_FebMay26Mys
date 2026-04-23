const movie = require("../models/Movie");

// Create Movie (CRUD-create)
exports.createMovie = async (data) => {
    return await Movie.create(data);
};

// Get movies (CRUD-read)
exports.getMoovies = async(query) => {
    let { page=1, limit=5, genre, rating, search, sort} = query;

    page = Number(page);
    limit = Number(limit);
}