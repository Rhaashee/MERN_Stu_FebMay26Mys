const express = require("express");
const router = express.Router();
const movie

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",)

// Admin only route
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create movie");
});
module.exports = router;