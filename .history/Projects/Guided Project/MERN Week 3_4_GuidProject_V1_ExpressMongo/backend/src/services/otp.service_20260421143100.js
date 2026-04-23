const OTP = require("../models/OTP");
const bycrypt = require("bycrypt");

// Generate OTP 
exports.generateOTP = async(email)