const express = require("express");
const {getBudget, updateBudget} = require("../controllers/budget");
// const { validateUser } = require("../middleware/auth");
const router = express.Router();

router.get('/:projectId', getBudget)
router.put('/:projectId', updateBudget)

module.exports = router