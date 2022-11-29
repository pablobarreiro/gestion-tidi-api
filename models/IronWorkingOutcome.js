const S = require("sequelize");
const db = require("../db");

class IronWorkingOutcome extends S.Model {}

IronWorkingOutcome.init(
  {
    amount: {
      type: S.FLOAT,
      allowNull: false,
    },
    invoice_number: {
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
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "iron_working_outcome" }
);

module.exports = IronWorkingOutcome;
