const express = require("express");
const marbleControllers = require("../controllers/marble");
const router = express.Router();

router.get('/:projectId/outcomes', marbleControllers.getOutcomes)
router.put('/:projectId/totals', marbleControllers.updateTotals)
// router.put('/:projectId/outcomes', marbleControllers.updateOutcomes)
router.post('/outcome', marbleControllers.newOutcome)

module.exports = router