const User = require("../models/User");
const OTP = require("../models/OTP");
const otpService = require("./otp.service");
const bycrypt = require("bycrypt");
const jwt = require("jsonwebtokens");

// Register User
exports.registerUser = async ({name,email,password}) => {
    const existingUser = await User.findOne({email});

    if (existingUser) {
        throw new error("User already exists.");
    }

    const user = await User.create({
        name,email,password
    });

    await otpService.generateOTP(email);

    return{email:user.email};
};

// Verify OTP
exports.verifyOTP = async({email,otp}) => {
    const record = await OTP.findOne({email}).select("+otp");

    if(!reco)
}