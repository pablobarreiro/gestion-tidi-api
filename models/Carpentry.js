const S = require("sequelize");
const db = require("../db");

class Carpentry extends S.Model {}

Carpentry.init(
  {
    total: {
      type: S.FLOAT,
    },
    adjust: {
      type: S.FLOAT,
    },
    shipping_total: {
      type: S.FLOAT,
    },
    placement_total: {
      type: S.FLOAT,
    },
    shipping_paid: {
      type: S.BOOLEAN,
      defaultValue:false
    },
    placement_paid: {
      type: S.BOOLEAN,
      defaultValue:false
    },
  },
  { sequelize: db, modelName: "carpentry_generals" }
);

module.exports = Carpentry;
