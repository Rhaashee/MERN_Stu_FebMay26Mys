const movieService = require("../services/movie.service");

// Create Movie
exports.createMovie = async (req,res,next) => {
    try {
        const movie = await movieService.createMovie(req.body);

        res.status 
    } catch (error) {
        
    }
}