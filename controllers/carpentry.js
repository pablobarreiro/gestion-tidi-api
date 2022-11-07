const { Carpentry, CarpentryOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectNumber
  getOutcomes: async (req, res) => {
    try {
      const outcomes = await IronWorkingOutcome.findAll(
        Number(req.params.projectNumber)
      );
      // Devuelve [outcome1, outcome2, ...]
      res.sendStatus(outcomes);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.params ---> projectNumber
  // req.body ---> {total, adjust, shipping_total, shipping_paid, placement_total, placement_paid}
  // Este controlador esta duplicado desde project (funcion edit)
  updateTotals: async (req, res) => {
    try {
      const carpentryTotals = await Carpentry.findOne({
        where: { projectProjectNumber: Number(req.params.projectNumber) },
      });
      await carpentryTotals.update(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // RUTA INCOMPLETA
  updateOutcomes: async (req, res) => {
    try {
      // const carpentryOutcomes = await CarpentryOutcome.findAll({
      //   where: { project_number: Number(req.params.projectNumber) },
      // });
      res.sendStatus(400);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> [ {project_number,amount,pay_date}, {idem}, ... ]
  newOutcome: async (req, res) => {
    try {
      await CarpentryOutcome.bulkCreate(req.body);
      const maxTrackingNumber = await CarpentryOutcome.max("tracking_number");
      const newNumber = maxTrackingNumber + 1;
      await CarpentryOutcome.update(
        { tracking_number: newNumber },
        { where: { tracking_number: 0 } }
      );
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  //   deletePayment: async (req, res) => {
  //     try {
  //         CarpentryOutcome.destroy({where:{[Op.and]: [
  //             { tracking_number: req.body.tracking_number },
  //             { project_number: req.body.project_number }
  //           ]}})
  //     } catch (err) {
  //         console.log(err)
  //     }
  //   }
};
