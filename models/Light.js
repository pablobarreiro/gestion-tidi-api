const S = require("sequelize");
const db = require("../db");

class Light extends S.Model {}

Light.init(
  {
    adjust: {
      type: S.FLOAT,
    },
    placement_total: {
      type: S.FLOAT,
    },
    placement_paid: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    adjust_paid: {
      type: S.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelName: "light_generals" }
);

module.exports = Light;
