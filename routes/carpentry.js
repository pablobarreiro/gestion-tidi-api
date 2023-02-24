const express = require("express");
const {getOutcomes, updateTotals, updateOutcomes, newOutcome, deleteOutcome} = require("../controllers/carpentry");
const { validateAdmin } = require("../middleware/auth");
const router = express.Router();

router.get('/:projectId/outcomes', validateAdmin, getOutcomes)
router.put('/:projectId/totals', validateAdmin, updateTotals)
// router.put('/:projectId/outcomes', validateAdmin, updateOutcomes)
router.post('/outcome', validateAdmin, newOutcome)
router.delete('/outcome/:id', validateAdmin, deleteOutcome)

module.exports = router