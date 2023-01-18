const { IncomeTotal, IncomePartial } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectId
  getPayments: async (req, res) => {
    try {
      const payments = await IncomePartial.findAll(
        Number(req.params.projectId)
      );
      res.sendStatus(payments);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.params ---> projectId
  // req.body ---> {total, adjust}
  updateTotals: async (req, res) => {
    try {
      const incomeTotals = await IncomeTotal.findOne({
        where: { projectId: Number(req.params.projectId) },
      });
      await incomeTotals.update(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> {projectId, pay_date, amount, payment_method}
  newPayment: async (req, res) => {
    try {
      const newPayment = await IncomePartial.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.params ---> id (paymentId)
  removePayment: async (req, res) => {
    try {
      await IncomePartial.destroy({where:{id:req.params.id}})
      res.sendStatus(204)
    } catch (err) {
      console.log(err)
      res.send(err)
    }
  }
};
