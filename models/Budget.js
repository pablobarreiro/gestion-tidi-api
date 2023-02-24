const S = require("sequelize");
const db = require("../db");

class Budget extends S.Model {}

Budget.init(
  {
    carpentryFirst: {
      type: S.FLOAT,
      defaultValue: 0
    },
    carpentrySecond: {
      type: S.FLOAT,
      defaultValue: 0
    },
    carpentryThird: {
      type: S.FLOAT,
      defaultValue: 0
    },
    iron_working: {
      type: S.FLOAT,
      defaultValue: 0
    },
    marble: {
      type: S.FLOAT,
      defaultValue: 0
    },
    dolar: {
      type: S.FLOAT,
      defaultValue: 0
    },
    date: {
      type: S.DATE,
    },
    total: {
      type: S.VIRTUAL,
      get() {
        return this.carpentryFirst + this.iron_working + (this.carpentrySecond + this.carpentryThird + this.marble) * this.dolar
      },
    }
  },
  { sequelize: db, modelName: "budget" }
);

module.exports = Budget;
