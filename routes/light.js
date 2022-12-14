const express = require("express");
const lightControllers = require("../controllers/light");
const router = express.Router();

router.get('/:projectId/outcomes', lightControllers.getOutcomes)
router.put('/:projectId/totals', lightControllers.updateTotals)
router.post('/invoice', lightControllers.newInvoice)
router.post('/invoices', lightControllers.newInvoices)
router.put('/invoices', lightControllers.payInvoices)

module.exports = router