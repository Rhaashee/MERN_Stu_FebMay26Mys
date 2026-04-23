const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movie.controller");

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",movieController.getMovies);

// Admin only route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create movie");
});
module.exports = router;