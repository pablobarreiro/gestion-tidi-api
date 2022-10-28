const { Project, Carpentry, CarpentryOutcome } = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  total: async (req, res) => {
    try {
      const project = await Project.findOne({where:{project_number: req.body.projectNumber},include:[{Carpentry,CarpentryOutcome}]})

      res.send(project)
    } catch (err) {
      console.log(err)
      res.status(400).send(err)
    }
  },

};
