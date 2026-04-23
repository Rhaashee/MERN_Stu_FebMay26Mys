const connectionsData = require("../data/connections");
const CustomError = require("../utils/customError");

// Send Connection Request
function sendRequest(req,res,next){
    try {
        const senderId = req.user.id;
        const receiverId = req.params.userId;

        if(!receiverId){
            return next (new CustomError("Receiver ID is mandatory",400))
        }
    } catch (error) {
        
    }
}