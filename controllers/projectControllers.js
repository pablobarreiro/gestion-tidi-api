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
        where: { project_number: req.body.projectNumber },
        include: [{ Carpentry, CarpentryOutcome }],
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
      const project = await Project.findByPk(req.params.projectNumber)
      await project.update(req.body);
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
