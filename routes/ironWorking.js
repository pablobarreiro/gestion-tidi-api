const express = require("express");
const ironWorkingControllers = require("../controllers/ironWorking");
const router = express.Router();

router.get('/:projectNumber/outcomes', ironWorkingControllers.getOutcomes)
router.put('/:projectNumber/totals', ironWorkingControllers.updateTotals)
router.post('/invoice', ironWorkingControllers.newInvoice)
router.post('/invoices', ironWorkingControllers.newInvoices)
router.put('/invoices', ironWorkingControllers.payInvoices)

module.exports = router