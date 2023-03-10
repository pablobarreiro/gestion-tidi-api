const S = require("sequelize");
const db = require("../db");

class IronWorking extends S.Model {}

IronWorking.init(
  {
    adjust: {
      type: S.FLOAT,
    },
    adjust_paid: {
      type: S.BOOLEAN,
    }
  },
  { sequelize: db, modelName: "iron_working_generals" }
);

module.exports = IronWorking;
