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
            token = req.authorization.split(" ")[1];
        }
        if (!token) {
            return res.status(401).json({
                success:false,
                message:"Not authorized, token missing"
            })
        }
    } catch (error) {
        
    }
}