const express = require("express");
const carpentryControllers = require("../controllers/carpentryControllers");
const router = express.Router();

router.get('/carpentry', carpentryControllers.total)


module.exports = router