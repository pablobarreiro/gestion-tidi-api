const express = require("express");
const router = express.Router();
const {
  addBranch,
  removeBranch,
  addSalesman,
  removeSalesman,
  addInternalState,
  removeInternalState,
  getBranch,
  getSalesman,
  getInternalState,
} = require("../controllers/generals");

router.get("/branch", getBranch)
router.get("/salesman", getSalesman)
router.get("/internalState", getInternalState)

router.post("/branch", addBranch);
router.post("/salesman", addSalesman);
router.post("/internalState", addInternalState);

router.delete("/branch/:id", removeBranch);
router.delete("/salesman/:id", removeSalesman);
router.delete("/internalState/:id", removeInternalState);

module.exports = router;
