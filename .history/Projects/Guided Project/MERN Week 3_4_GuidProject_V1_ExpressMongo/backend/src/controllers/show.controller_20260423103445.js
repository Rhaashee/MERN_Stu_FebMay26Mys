const showService = require("../services/show.service");

// Create Showc: Admin
exports.createShow = async (req,res,next)=>{
    try{
        const show = await showService.createShow(req.body)
    }catch(error){
        
    }
}