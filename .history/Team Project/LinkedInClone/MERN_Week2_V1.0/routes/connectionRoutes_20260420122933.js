// Routes created for send,get,accpet and reject request along with get connections 
const express = require("express");
const router = express.Router(); //Creates a mini route handler :Instead of writing routes in server.js,we write here to maintain clean structure 

const connectionController = require("../controllers/connectionController"); // Imports all functions from controller
const authMiddleware = require("../middleware/authMiddleware"); // Imports all function from middleware and this runs before controller

router.post("/request/:userId",authMiddleware,connectionController.sendRequests); // Sends request
router.get("/request",authMiddleware,connectionController.getRequests); // Get All request
router.put("/accept/:requestId:",authMiddleware,connectionController.acceptRequest); // Accept request
router.put("/reject/:requestId:",authMiddleware,connectionController.rejectRequest); // Reject request
router.get("/",authMiddleware,connectionController.getConnections); // Get connections

module.exports = router;