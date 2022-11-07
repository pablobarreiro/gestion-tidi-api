const express = require("express");
const projectControllers = require("../controllers/project");
const router = express.Router();

router.get('/single/:projectNumber', projectControllers.single)
router.post('/project', projectControllers.create)

module.exports = router