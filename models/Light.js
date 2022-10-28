const S = require("sequelize");
const db = require("../db");

class Light extends S.Model {}

Light.init(
  {
    adjust_total: {
      type: S.FLOAT,
    },
    placement_total: {
      type: S.FLOAT,
    },
    adjust_paid: {
      type: S.BOOLEAN,
    },
    placement_paid: {
      type: S.BOOLEAN,
    },
  },
  { sequelize: db, modelName: "light_generals" }
);

module.exports = Light;
