const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const carpentryRouter = require('./carpentry')

router.use("/user", userRouter);
router.use('/carpentry', carpentryRouter)


module.exports = router;