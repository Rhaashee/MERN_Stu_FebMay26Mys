const showService = require("../services/show.service");

// Create Showc: Admin
exports.createShow = async (req,res,next)=>{
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success : true,
            message : "Show Created successfully",
            data : show,
        });
    }catch(error){
        next(error);
    }
};

// Get Shows
exports.getShows = async (req,res,next)=>{
    try{
        const show = await showService.getShows(req.query);
        res.status(200).json({
            success : true,
            message : "Shows fetched successfully",
            data : shows,
        });
    }catch(error){
        next(error);
    }
};

// Get Single Show
exports.getShowById = async (req,res,next)=>{
    try{
        const show = await showService.getShowById(req.params.if);
        res.status(200).json({
            success : true,
            message : "Show fetched successfully",
            data : show,
        });
    }catch(error){
        next(error);
    }
};

// Update Show
exports.updateShow = async (req,res,next) => {
    try {
        const movie = await movieService.updateShow(req.params.id,req.body);

        res.status(200).json({
            success:true,
            message:"Show updated successfully.",
            data:movie 
        });
    } catch (error) {
        next(error);
    }
};

// Delete Show
exports.deleteShow = async (req,res,next) => {
    try {
        await movieService.deleteMovie(req.params.id);

        res.status(200).json({
            success:true,
            message:"Movie deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};