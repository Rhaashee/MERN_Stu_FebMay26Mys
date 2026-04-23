const authService = require("../services/auth.service");

// Register
exports.register = async(req,res,next)=>{
    try {
        const result = await authService.registerUser(req.body);

        res.status(201).json({
            success:true,
            message:"User registered.OTP sent.",
            data:result,
        });
    } catch (error) {
        next (error);
    }
};

// Verify OTP
exports.verifyOTP = async(req,res,next)=>{
    try {
        await authService.verifyOTP(req.body);

        res.status(200).json()
    } catch (error) {
        
    }
}