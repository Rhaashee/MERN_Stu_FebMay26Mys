const express = require("express");
const router = express.Router();

const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

// Public route (normal route)
router.get("/",(req))