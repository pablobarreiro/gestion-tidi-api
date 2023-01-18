const express = require("express");
const {getPayments, updateTotals, newPayment, removePayment} = require("../controllers/income");
const router = express.Router();

router.get('/:projectId/payments', getPayments)
router.put('/:projectId/totals', updateTotals)
router.post('/payment', newPayment)
router.delete('/:id', removePayment)
module.exports = router