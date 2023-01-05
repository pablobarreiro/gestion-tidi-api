const S = require("sequelize");
const db = require("../db");

class InternalState extends S.Model {}

InternalState.init(
  {
    name: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "internal_state" }
);

module.exports = InternalState;
