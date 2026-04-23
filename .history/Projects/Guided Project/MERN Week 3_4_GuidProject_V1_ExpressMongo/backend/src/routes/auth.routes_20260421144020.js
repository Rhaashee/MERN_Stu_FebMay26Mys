const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Routes 
router.post("/register",authController.register);
router.post("/verify-otp")