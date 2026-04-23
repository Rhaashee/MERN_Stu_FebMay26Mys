const express = require("express");
const router = express.Router();

const connectionController = require("../controllers/connectionController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/request/:userId",authMiddleware,connectionController.sendRequest);
router.get("/request",authMiddleware,connectionController.getRequest);
router.put("/accept/requestId:",authMiddleware,connectionController.acceptRequest);
router.put("/reject/requestId:",authMiddleware,connectionController.rejectRequest);
router.get("/",authMiddleware,connectionController.getConnections);

module