const { request } = require("express");
const connectionsData = require("../data/connections");
const CustomError = require("../utils/customError");

// Send Connection Request
function sendRequest(req,res,next){
    try {
        const senderId = req.user.id;
        const receiverId = req.params.userId;

        if(!receiverId){
            return next (new CustomError("Receiver ID is required",400));
        }

        const request = {
            id : user.id,
            senderId,
            receiverId,
            status : "pending"
        };

        connectionsData.requests.push(request);

        res.staus(201).json({
            success:true,
            message: "Connection request sent", request
        });
        
    } catch (error) {
        next(error);
    }
}

// Connection request 
function getRequests(req,res,next){
    try {
        const userId = req.user.id;

        const requests = connectionsData.requests.filter(user=> user.receiverId==userId);

        res.status(200).json({
            success:"true",
            message:"Request fetched successfully",
            data : requests
        });
    } catch (error) {
        next(error);
    }
}

// Accept request 
function acceptRequests(req,res,next){
    try {
        const requestId = req.user.id;

        const requests = connectionsData.requests.filter(user=> user.receiverId==userId);

        if(!request){
            return next(new CustomError("Request not found",404));
        }
        request.status = "accepted";
        connectionsData.connections.push({
            user1:
        })

        res.status(200).json({
            success:"true",
            message:"Connection Request is Accepted",
        });
    } catch (error) {
        next(error);
    }
}