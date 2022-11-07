const { IronWorking, IronWorkingOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  // Llega el nro de proyecto por req.params
  getProject: async (req, res) => {
    try {
      const outcomes = await IronWorkingOutcome.findAll(req.params.projectNumber)
      res.sendStatus(outcomes)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  },
  // Tiene que llegar por req.body ---> {projectNumber, amount, invoice_number, invoiceDate}
  addInvoice: async (req, res) => {
    const project_number = req.body.projectNumber
    const amount = req.body.amount
    const invoice_number = req.body.invoice
    const invoice_date = req.body.invoiceDate
    try {
      await IronWorkingOutcome.create({project_number,amount,invoice_number,invoice_date})
      res.sendStatus(201)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  },
  // Llega por req.body ---> [{projectNumber, invoiceNumber, payDate, paid},{projectNumber, invoiceNumber, payDate, paid}]
  payInvoices: async (req, res) => {
    const invoicesToPay = req.body
    await invoicesToPay.forEach(async invoice => {
      const outcome = await IronWorkingOutcome.findOne({where:{invoice_number:invoice.invoiceNumber}})
      outcome.update({pay_date:invoice.payDate, paid: invoice.paid})
    })
  },
  // HECHO CON .THEN() POR SI NO FUNCIONA EL ASYNC (BORRAR SI FUNCIONA)
  // payInvoices: (req, res) => {
  //   const invoicesToPay = req.body
  //   invoicesToPay.forEach(invoice => {
  //     IronWorkingOutcome.findOne({where:{invoice_number:invoice.invoiceNumber}})
  //     .then(found => found.update({pay_date:invoice.payDate, paid: invoice.paid}))
  //   })
  //   .then(()=> res.send(200))
  //   .catch((err)=>{
  //     console.log(err)
  //     res.send(err)
  //   })
  // },

  // Llega projectNumber por req.params.projectNumber para el update y por req.body los datos que hay que modificar
  updateTotals: async (req, res) => {
    try {
      const ironWorkingTotals = await IronWorking.findOne({
        where: { projectProjectNumber: req.params.projectNumber },
      });
      await ironWorkingTotals.update(req.body);
      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
