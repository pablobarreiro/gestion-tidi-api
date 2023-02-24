const express = require("express");
const {
  getOutcomes,
  updateTotals,
  newInvoice,
  newInvoices,
  payInvoices,
  deleteOutcome,
} = require("../controllers/light");
const { validateAdmin } = require("../middleware/auth");
const router = express.Router();

router.get("/:projectId/outcomes", validateAdmin, getOutcomes);
router.put("/:projectId/totals", validateAdmin, updateTotals);
router.post("/invoice", validateAdmin, newInvoice);
router.post("/invoices", validateAdmin, newInvoices);
router.put("/invoices", validateAdmin, payInvoices);
router.delete("/outcome/:id", validateAdmin, deleteOutcome);

module.exports = router;
