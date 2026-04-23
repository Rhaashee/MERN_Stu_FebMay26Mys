const OTP = require("../models/OTP");
const bycrypt = require("bycrypt");

// Generate OTP 
exports.generateOTP = async(email) => {
    const otp = Math.floor(100000)
}