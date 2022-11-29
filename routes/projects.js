const express = require("express");
const projectControllers = require("../controllers/project");
const router = express.Router();

router.get('/single/:projectId', projectControllers.single)
router.get('/all',projectControllers.all)
router.post('/project', projectControllers.create)
router.put('/single/:projectId', projectControllers.edit)

module.exports = router