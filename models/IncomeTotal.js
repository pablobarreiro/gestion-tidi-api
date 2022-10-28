const S = require("sequelize");
const db = require("../db");

class IncomeTotal extends S.Model {}

IncomeTotal.init(
  {
    total: {
      type: S.FLOAT,
    },
    adjust: {
      type: S.FLOAT,
    },

  },
  { sequelize: db, modelName: "income_totals" }
);

module.exports = IncomeTotal;
