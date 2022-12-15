const express = require("express");
const {
  getOutcomes,
  updateTotals,
  newInvoice,
  newInvoices,
  payInvoices,
  deleteOutcome,
} = require("../controllers/ironWorking");
const router = express.Router();

router.get("/:projectId/outcomes", getOutcomes);
router.put("/:projectId/totals", updateTotals);
router.post("/invoice", newInvoice);
router.post("/invoices", newInvoices);
router.put("/invoices", payInvoices);
router.delete("/outcome/:id", deleteOutcome);

module.exports = router;
