const { Light, LightOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectId
  getOutcomes: async (req, res) => {
    try {
      const outcomes = await LightOutcome.findAll(
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
  // req.body ---> {adjust,placement_total,placement_paid}
  // Este controlador esta duplicado desde project (funcion edit)
  updateTotals: async (req, res) => {
    try {
      await Light.update(req.body, {
        where: { projectId: Number(req.params.projectId) },
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> {projectId, amount, invoice_number, invoice_date}
  newInvoice: async (req, res) => {
    try {
      await LightOutcome.create(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> [{projectId, amount, invoice_number, invoice_date}, ...]
  newInvoices: async (req, res) => {
    try {
      await LightOutcome.bulkCreate(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> [{id, projectId, invoice_number, pay_date, paid}, {idem}, ...]
  payInvoices: async (req, res) => {
    try {
      const invoicesToPay = req.body;
      await invoicesToPay.forEach(async (invoiceToPay) => {
        await LightOutcome.update(invoiceToPay, {
          where: { id: invoiceToPay.id },
        });
      });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  // HECHO CON .THEN() POR SI NO FUNCIONA EL ASYNC (BORRAR SI FUNCIONA)
  // payInvoices: (req, res) => {
  //   const invoicesToPay = req.body
  //   invoicesToPay.forEach(invoice => {
  //     LightOutcome.findOne({where:{invoice_number:invoice.invoice_number}})
  //     .then(found => found.update(invoice))
  //   })
  //   .then(()=> res.send(200))
  //   .catch((err)=>{
  //     console.log(err)
  //     res.send(err)
  //   })
  // },
};
