const {BranchOffice, Salesman, InternalState} = require('../models')


module.exports = {
    getBranch: async (req, res) => {
        const officeList = await BranchOffice.findAll()
        res.send(officeList)
    },
    addBranch: async (req, res) => {
        await BranchOffice.create(req.body)
        res.sendStatus(201)
    },
    removeBranch: async (req, res) => {
        await BranchOffice.destroy({where:{id:req.params.id}})
        res.sendStatus(204)
    },
    getSalesman: async (req, res) => {
        const salesmenList = await Salesman.findAll()
        res.send(salesmenList)
    },
    addSalesman: async (req, res) => {
        await Salesman.create(req.body)
        res.sendStatus(201)
    },
    removeSalesman: async (req, res) => {
        await Salesman.destroy({where:{id:req.params.id}})
        res.sendStatus(204)
    },
    getInternalState: async (req, res) => {
        const stateList = await InternalState.findAll()
        res.send(stateList)
    },
    addInternalState: async (req, res) => {
        await InternalState.create(req.body)
        res.sendStatus(201)
    },
    removeInternalState: async (req, res) => {
        await InternalState.destroy({where:{id:req.params.id}})
        res.sendStatus(204)
    },
}
