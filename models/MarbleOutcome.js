const S = require("sequelize");
const db = require("../db");

class MarbleOutcome extends S.Model {}

MarbleOutcome.init(
  {
    amount: {
      type: S.FLOAT,
      allowNull: false
    },
    pay_date: {
      type: S.DATE,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "marble_outcome" }
);

module.exports = MarbleOutcome;
