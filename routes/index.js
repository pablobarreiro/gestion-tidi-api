const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const projectsRouter = require('./projects')
const carpentryRouter = require('./carpentry')
const ironWorkingRouter = require('./ironWorking')

router.use("/user", userRouter);
router.use('/projects', projectsRouter)
router.use('/carpentry', carpentryRouter)
router.use('/ironWorking', ironWorkingRouter)


module.exports = router;