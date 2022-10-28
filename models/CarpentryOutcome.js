const S = require("sequelize");
const db = require("../db");

class CarpentryOutcome extends S.Model {}

CarpentryOutcome.init(
  {
    project_number: {
      type: S.INTEGER,
      allowNull: false
    },
    amount: {
      type: S.FLOAT,
      allowNull: false
    },
    tracking_number: {
      type: S.INTEGER,
      defaultValue: 0
    },
    pay_date: {
      type: S.DATE,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "carpentry_outcome" }
);

module.exports = CarpentryOutcome;
