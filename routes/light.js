const express = require("express");
const ironWorkingControllers = require("../controllers/ironWorking");
const router = express.Router();

router.get('/:projectId/outcomes', ironWorkingControllers.getOutcomes)
router.put('/:projectId/totals', ironWorkingControllers.updateTotals)
router.post('/invoice', ironWorkingControllers.newInvoice)
router.post('/invoices', ironWorkingControllers.newInvoices)
router.put('/invoices', ironWorkingControllers.payInvoices)

module.exports = router