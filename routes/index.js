const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const projectsRouter = require('./projects')
const carpentryRouter = require('./carpentry')
const ironWorkingRouter = require('./ironWorking')
const lightRouter = require('./light')
const marbleRouter = require('./marble')
const incomeRouter = require('./income')
const generalsRouter = require('./generals')
const budgetRouter = require('./budget')

router.use("/user", userRouter);
router.use('/projects', projectsRouter)
router.use('/carpentry', carpentryRouter)
router.use('/ironWorking', ironWorkingRouter)
router.use('/light', lightRouter)
router.use('/marble', marbleRouter)
router.use('/income', incomeRouter)
router.use('/generals', generalsRouter)
router.use('/budget', budgetRouter)

module.exports = router;