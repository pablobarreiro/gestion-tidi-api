const S = require("sequelize");
const db = require("../db");

class Budget extends S.Model {}

Budget.init(
  {
    carpentry: {
      type: S.FLOAT,
    },
    iron_working: {
      type: S.FLOAT,
    },
    light: {
      type: S.FLOAT,
    },
    marble: {
      type: S.FLOAT,
    },
  },
  { sequelize: db, modelName: "budget" }
);

module.exports = Budget;
