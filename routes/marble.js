const express = require("express");
const marbleControllers = require("../controllers/marble");
const router = express.Router();

router.get('/:projectNumber/outcomes', marbleControllers.getOutcomes)
router.put('/:projectNumber/totals', marbleControllers.updateTotals)
// router.put('/:projectNumber/outcomes', marbleControllers.updateOutcomes)
router.post('/outcome', marbleControllers.newOutcome)

module.exports = router