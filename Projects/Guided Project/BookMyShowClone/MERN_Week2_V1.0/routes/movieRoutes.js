// Handles request related to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware"); 

const {getHome,getAllMovies,getMovieById,addMovie,updateMovie,deletedMovie} = require(".../controllers/movieControllers");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

// get : reads data 
// send request to home page 
router.get("/",getHome);
// send req to get all movies 
router.get("/movies",getAllMovies);
// send req to get movies based on id
router.get("/movies/:id",getMovieById);
// post : Create - Sends req to create new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
// put : update - Sends req to update movie details 
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);
// delete : delete - Sends req to delete a movie 
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);

module.exports = router;