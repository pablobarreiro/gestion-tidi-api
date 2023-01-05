const S = require("sequelize");
const db = require("../db");

class Salesman extends S.Model {}

Salesman.init(
  {
    name: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "salesman" }
);

module.exports = Salesman;
