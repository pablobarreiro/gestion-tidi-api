const S = require("sequelize");
const db = require("../db");

class LightOutcome extends S.Model {}

LightOutcome.init(
  {
    project_number: {
      type: S.INTEGER,
      allowNull: false,
    },
    amount: {
      type: S.FLOAT,
      allowNull: false,
    },
    pay_date: {
      type: S.DATE,
    },
    paid: {
      type: S.BOOLEAN,
    },
  },
  { sequelize: db, modelName: "light_outcome" }
);

module.exports = LightOutcome;
