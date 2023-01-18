const express = require("express");
const {getOutcomes, updateTotals, updateOutcomes, newOutcome, deleteOutcome} = require("../controllers/carpentry");
const router = express.Router();

router.get('/:projectId/outcomes', getOutcomes)
router.put('/:projectId/totals', updateTotals)
// router.put('/:projectId/outcomes', updateOutcomes)
router.post('/outcome', newOutcome)
router.delete('/outcome/:id', deleteOutcome)

module.exports = router