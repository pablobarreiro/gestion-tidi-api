const express = require("express");
const carpentryControllers = require("../controllers/carpentry");
const router = express.Router();

router.get('/:projectId/outcomes', carpentryControllers.getOutcomes)
router.put('/:projectId/totals', carpentryControllers.updateTotals)
// router.put('/:projectId/outcomes', carpentryControllers.updateOutcomes)
router.post('/outcome', carpentryControllers.newOutcome)

module.exports = router