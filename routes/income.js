const express = require("express");
const {getPayments, updateTotals, newPayment, removePayment} = require("../controllers/income");
const { validateAdmin } = require("../middleware/auth");
const router = express.Router();

router.get('/:projectId/payments',  validateAdmin, getPayments)
router.put('/:projectId/totals', validateAdmin, updateTotals)
router.post('/payment', validateAdmin, newPayment)
router.delete('/:id', validateAdmin, removePayment)
module.exports = router