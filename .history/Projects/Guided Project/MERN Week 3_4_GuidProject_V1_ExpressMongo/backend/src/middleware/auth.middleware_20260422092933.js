const jwt = require("jsonwebtoken");
const user = require("../models/User");

// Auth middleware creation 
exports.protect = async(re)