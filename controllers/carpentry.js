const { Carpentry, CarpentryOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectId
  getOutcomes: async (req, res) => {
    try {
      const outcomes = await CarpentryOutcome.findAll(
        Number(req.params.projectId)
      );
      // Devuelve [outcome1, outcome2, ...]
      res.sendStatus(outcomes);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.params ---> projectId
  // req.body ---> {total, adjust, shipping_total, shipping_paid, placement_total, placement_paid}
  // Este controlador esta duplicado desde project (funcion edit)
  updateTotals: async (req, res) => {
    try {
      const carpentryTotals = await Carpentry.findOne({
        where: { projectId: Number(req.params.projectId) },
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
      //   where: { project_number: Number(req.params.projectId) },
      // });
      res.sendStatus(400);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> {pay_date: ... , projects:[ {project_number,amount}, {idem}, ... ]}
  newOutcome: async (req, res) => {
    try {
      for (let i = 0; i < req.body.projects.length; i++) {
        const carpentryOutcome = await CarpentryOutcome.create({
          pay_date: req.body.pay_date,
          projectId: req.body.projects[i].projectId,
          amount: req.body.projects[i].amount,
        });
      }

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
