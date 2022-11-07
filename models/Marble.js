const S = require("sequelize");
const db = require("../db");

class Marble extends S.Model {}

Marble.init(
  {
    total: {
      type: S.FLOAT,
    },
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
  },
  { sequelize: db, modelName: "marble_generals" }
);

module.exports = Marble;
