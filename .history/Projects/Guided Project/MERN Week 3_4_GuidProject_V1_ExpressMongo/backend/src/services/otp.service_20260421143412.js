const OTP = require("../models/OTP");
const bycrypt = require("bycrypt");

// Generate OTP 
exports.generateOTP = async(email) => {
    const otp = Math.floor(100000+Math.random()*900000).toString();

    const hashedOTP = await bycrypt.hash(otp,10);
    
}