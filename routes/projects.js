const express = require("express");
const { single, all, create, edit } = require("../controllers/project");
const router = express.Router();

router.get('/single/:projectId', single)
router.get('/all',all)
router.post('/project', create)
router.put('/single/:projectId', edit)

module.exports = router