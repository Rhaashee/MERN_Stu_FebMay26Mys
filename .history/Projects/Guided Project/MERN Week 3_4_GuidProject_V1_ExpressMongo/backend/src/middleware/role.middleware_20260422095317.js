// Roole midlleware: RBAC
exports.authorize = (...roles)=>{
    return(req,res,next)=>{
        if (!req.user || !roles.include(req.user)) {
            return res.status(403).json({
                success:false,
                message:"Not authorized, token missing",
            });
        }
    }
}