const express = require("express");
const router = express.Router();

const showController = require("../controllers/show.controller");

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",showController.getShows);
router.get("/",showController.getShowById);

// Admin only route
router.post("/",protect,authorize("admin"),showController.createMovie);
router.put("/:id",protect,authorize("admin"),showController.exports.updateMovie = async (req,res,next) => {
);
router.delete("/:id",protect,authorize("admin"),showController.deleteMovie);

module.exports = router;