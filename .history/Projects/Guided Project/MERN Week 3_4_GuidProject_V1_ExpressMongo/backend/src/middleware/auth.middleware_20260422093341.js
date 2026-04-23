const jwt = require("jsonwebtoken");
const user = require("../models/User");

// Auth middleware creation 
exports.protect = async(req,res,next)=>{
    try {
        let token;
        if (
            req.headers.authorization && 
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req
        }
    } catch (error) {
        
    }
}