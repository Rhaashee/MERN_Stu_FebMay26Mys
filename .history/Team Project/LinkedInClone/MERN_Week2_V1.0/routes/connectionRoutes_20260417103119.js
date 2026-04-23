const express = require("express");
const router = express.Router();

const connectionController = require("../controllers/connectionController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/request/:userId",authMiddleware,connectionController.sendRequest);
router.post("/request",authMiddleware,connectionController.getRequest);
router.post("/accept/requestId:",authMiddleware,connectionController.acceptRequest);
router.post("/reject/requestId:",authMiddleware,connectionController.rejectRequest);
router.post("/",authMiddleware,connectionController.getConnection);
