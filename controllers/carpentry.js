const { Carpentry, CarpentryOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // Llega projectNumber por req.params para el update
  updateTotals: async (req, res) => {
    try {
      const carpentryTotals = await Carpentry.findOne({
        where: { projectProjectNumber: req.params.projectNumber },
      });
      await carpentryTotals.update(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  // Llega [ {project_number,amount,pay_date}, {project_number,amount,pay_date} ] como req.body
  newOutcome: async (req, res) => {
    try {
      const newPayment = await Carpentry.bulkCreate(req.body)
      const maxTrackingNumber = await Carpentry.max('tracking_number')
      const newNumber = maxTrackingNumber+1
      await Sales.update({ tracking_number: newNumber },{where:{tracking_number:0}})
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
