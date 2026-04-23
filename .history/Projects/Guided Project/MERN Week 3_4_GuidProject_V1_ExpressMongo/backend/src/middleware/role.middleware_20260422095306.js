// Roole midlleware: RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if (!req.user || !roles.include) {
            return res.status(401).json({
                success:false,
                message:"Not authorized, token missing",
            });
        }
    }
}