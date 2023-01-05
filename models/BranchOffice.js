const S = require("sequelize");
const db = require("../db");

class BranchOffice extends S.Model {}

BranchOffice.init(
  {
    name: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "branch_office" }
);

module.exports = BranchOffice;
