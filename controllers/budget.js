const { Budget } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectId
  getBudget: async (req, res) => {
    try {
      const budget = await Budget.findOne(
        { where: { projectId: Number(req.params.projectId)} }
      );
      res.send(budget);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.params ---> projectId
  // req.body ---> {carpentry,iron_working,light,marble}
  updateBudget: async (req, res) => {
    try {
      const budget = await Budget.findOne(
        { where: { projectId: Number(req.params.projectId)} }
      );
      await budget.update(req.body)
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
