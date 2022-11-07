const express = require("express");
const carpentryControllers = require("../controllers/carpentry");
const router = express.Router();

router.get('/:projectNumber/outcomes', carpentryControllers.getOutcomes)
router.put('/:projectNumber/totals', carpentryControllers.updateTotals)
// router.put('/:projectNumber/outcomes', carpentryControllers.updateOutcomes)
router.post('/outcome', carpentryControllers.newOutcome)

module.exports = router