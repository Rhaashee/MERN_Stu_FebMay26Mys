//Routes created for login,logout & Profile

const express = require("express");
const {authMiddleware} = require(".../middleware/authMiddleware");
const {loginUser,logoutUser,getProfile} = require("../controllers/authController");

const router = express.Router();

router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/profile",authMiddleware,loginUser);

module.exports = router;