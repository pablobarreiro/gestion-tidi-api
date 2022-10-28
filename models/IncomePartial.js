const S = require("sequelize");
const db = require("../db");

class IncomePartial extends S.Model {}

IncomePartial.init(
  {
    project_number: {
      type: S.INTEGER,
      allowNull: false,
    },
    amount: {
      type: S.FLOAT,
    },
    pay_date: {
      type: S.DATE,
    },
    payment_method: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "income_partials" }
);

module.exports = IncomePartial;
