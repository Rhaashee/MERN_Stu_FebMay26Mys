const express = require("express");
const router = express.Router();

const {protect} = require("../middleware/auth.middleware");
const { routes } = require("../../app");

//user booking route
router.post("/",protect,(req,res)=>{
    res.send("Create booking");
});

module.exports = routes