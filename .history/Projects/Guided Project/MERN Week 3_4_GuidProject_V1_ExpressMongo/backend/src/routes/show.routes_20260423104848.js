const express = require("express");
const router = express.Router();

const showController = require("../controllers/show.controller");

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",showController.gey);

// Admin only route
router.post("/",protect,authorize("admin"),movieController.createMovie);
router.put("/:id",protect,authorize("admin"),movieController.updateMovie);
router.delete("/:id",protect,authorize("admin"),movieController.deleteMovie);

module.exports = router;