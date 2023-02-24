const express = require("express");
const { adminSingle, adminAll, single, all, create, edit } = require("../controllers/project");
const { validateAdmin, validateUser } = require("../middleware/auth");
const router = express.Router();

router.get('/admin/single/:projectId', validateAdmin, adminSingle)
router.get('/admin/all', validateAdmin, adminAll)
router.get('/single/:projectId', single)
router.get('/all', all)
router.post('/project', validateAdmin, create)
router.put('/single/:projectId', validateAdmin, edit)

module.exports = router