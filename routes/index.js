const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const projectsRouter = require('./projects')

router.use("/user", userRouter);
router.use('/projects', projectsRouter)


module.exports = router;