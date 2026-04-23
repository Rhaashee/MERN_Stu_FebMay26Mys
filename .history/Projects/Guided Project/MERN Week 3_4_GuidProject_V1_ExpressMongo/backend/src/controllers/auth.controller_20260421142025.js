const authService = require("../services/auth.service");

// Register
exports.register = async(req,res,next)=>{
    try {
        const result = await authService.registerUser(req.body);

        res.status(201).json({
            success
        })
    } catch (error) {
        
    }
}