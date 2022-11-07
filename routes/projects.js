const express = require("express");
const projectControllers = require("../controllers/project");
const router = express.Router();

router.get('/single/:projectNumber', projectControllers.single)
router.post('/project', projectControllers.create)
router.put('/single/:projectNumber', projectControllers.edit)

module.exports = router