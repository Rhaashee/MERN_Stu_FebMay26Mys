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
        next(error)
    }
}