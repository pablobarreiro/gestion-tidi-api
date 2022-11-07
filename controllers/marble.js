const { Marble, MarbleOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectNumber
  getOutcomes: async (req, res) => {
    try {
      const outcomes = await MarbleOutcome.findAll(
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
  // req.body ---> {total, adjust, placement_total, placement_paid}
  updateTotals: async (req, res) => {
    try {
      const marbleTotals = await Marble.findOne({
        where: { projectProjectNumber: Number(req.params.projectNumber) },
      });
      await marbleTotals.update(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // RUTA INCOMPLETA
  updateOutcomes: async (req, res) => {
    try {
      // const MarbleOutcomes = await MarbleOutcome.findAll({
      //   where: { project_number: Number(req.params.projectNumber) },
      // });
      res.sendStatus(400);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> {project_number,amount,pay_date}
  newOutcome: async (req, res) => {
    try {
      await MarbleOutcome.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  //   deletePayment: async (req, res) => {
  //     try {
  //         MarbleOutcome.destroy({where:{project_number: req.body.project_number }
  //         })
  //     } catch (err) {
  //         console.log(err)
  //     }
  //   }
};
