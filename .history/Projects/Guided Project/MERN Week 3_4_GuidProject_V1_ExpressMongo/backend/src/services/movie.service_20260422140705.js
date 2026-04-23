const movie = require("../models/Movie");

// Create Movie (CRUD-create)
exports.createMovie = async (data) => {
    return await Movie.create(data);
};

// Get movies (CRUD-read)
exports