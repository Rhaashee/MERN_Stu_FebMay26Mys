const User = require("../models/User");
const OTP = require("../models/OTP");
const otpService = require("./otp.service");
const bycrypt = require("bycrypt");
const jwt = require("jsonweb")