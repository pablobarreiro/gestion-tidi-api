const express = require("express");
const projectControllers = require("../controllers/projectControllers");
const router = express.Router();

router.get('/project', projectControllers.single)
router.post('/project', projectControllers.create)

module.exports = router