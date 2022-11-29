const {
  Project,
  Carpentry,
  CarpentryOutcome,
  IronWorking,
  IronWorkingOutcome,
  Light,
  LightOutcome,
  Marble,
  MarbleOutcome,
  IncomePartial,
  IncomeTotal,
} = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  single: async (req, res) => {
    try {
      const project = await Project.findOne({
        where: { id: Number(req.params.projectId) },
        include: [Carpentry, CarpentryOutcome, IronWorking, IronWorkingOutcome, Light, LightOutcome, Marble, MarbleOutcome, IncomePartial, IncomeTotal],
      });
      res.send(project);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },


  all: async (req, res) => {
    try {
      const project = await Project.findAll({
        include: [Carpentry, CarpentryOutcome, IronWorking, IronWorkingOutcome, Light, LightOutcome, Marble, MarbleOutcome, IncomePartial, IncomeTotal],
      });
      res.send(project);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  create: async (req, res) => {
    const initialValues = {
      total: 0,
      adjust: 0,
      shipping_total: 0,
      placement_total: 0,
    };
    try {
      const newProject = await Project.create(req.body);
      const carpentryTotals = await Carpentry.create(initialValues);
      const ironWorkingTotals = await IronWorking.create(initialValues);
      const lightTotals = await Light.create(initialValues);
      const marbleTotals = await Marble.create(initialValues);
      const incomeTotals = await IncomeTotal.create(initialValues);

      carpentryTotals.setProject(newProject);
      ironWorkingTotals.setProject(newProject);
      lightTotals.setProject(newProject);
      marbleTotals.setProject(newProject);
      incomeTotals.setProject(newProject);

      res.sendStatus(201);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  edit: async (req, res) => {
    try {
      const projectId = Number(req.params.projectId)
      const project = await Project.findByPk(projectId);
      await project.update(req.body);
      if(req.body.carpentry) await Carpentry.update(req.body.carpentry, {where:{projectId:projectId}})
      if(req.body.ironWorking) await IronWorking.update(req.body.ironWorking, {where:{projectId:projectId}})
      if(req.body.light) await Light.update(req.body.light, {where:{projectId:projectId}})
      if(req.body.marble) await Marble.update(req.body.marble, {where:{projectId:projectId}})
      if(req.body.incomeTotal) await IncomeTotal.update(req.body.incomeTotal, {where:{projectId:projectId}})
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
