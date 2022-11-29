const { IronWorking, IronWorkingOutcome, Project } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // req.params ---> projectId
  getOutcomes: async (req, res) => {
    try {
      const outcomes = await IronWorkingOutcome.findAll(
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
  // req.body ---> {adjust}
  // Este controlador esta duplicado desde project (funcion edit)
  updateTotals: async (req, res) => {
    try {
      await IronWorking.update(req.body, {
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
      const newOutcome = await IronWorkingOutcome.create(req.body)
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> [{projectId, amount, invoice_number, invoice_date}, ...]
  newInvoices: async (req, res) => {
    try {
      await IronWorkingOutcome.bulkCreate(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  // req.body ---> [{project_number, invoice_number, pay_date, paid}, {idem}, ...]
  payInvoices: async (req, res) => {
    try {
      const invoicesToPay = req.body;
      await invoicesToPay.forEach(async (invoiceToPay) => {
        await IronWorkingOutcome.update(invoiceToPay, {
          where: { invoice_number: invoiceToPay.invoice_number },
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
  //     IronWorkingOutcome.findOne({where:{invoice_number:invoice.invoice_number}})
  //     .then(found => found.update(invoice))
  //   })
  //   .then(()=> res.send(200))
  //   .catch((err)=>{
  //     console.log(err)
  //     res.send(err)
  //   })
  // },
};
