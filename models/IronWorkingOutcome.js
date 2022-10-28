const S = require("sequelize");
const db = require("../db");

class IronWorkingOutcome extends S.Model {}

IronWorkingOutcome.init(
  {
    project_number: {
      type: S.INTEGER,
      allowNull: false,
    },
    amount: {
      type: S.FLOAT,
      allowNull: false,
    },
    invoice: {
      type: S.STRING,
      allowNull: false,
    },
    invoice_date: {
      type: S.DATE,
      allowNull: false,
    },
    pay_date: {
      type: S.DATE,
    },
    paid: {
      type: S.BOOLEAN,
    },
  },
  { sequelize: db, modelName: "iron_working_outcome" }
);

module.exports = IronWorkingOutcome;
