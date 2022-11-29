const express = require("express");
const incomeControllers = require("../controllers/income");
const router = express.Router();

router.get('/:projectId/payments', incomeControllers.getPayments)
router.put('/:projectId/totals', incomeControllers.updateTotals)
router.post('/payment', incomeControllers.newPayment)

module.exports = router