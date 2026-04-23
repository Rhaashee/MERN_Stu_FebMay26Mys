const express = require("express");
const router = express.Router();

const connectionController = require("../controllers/connectionController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/request")