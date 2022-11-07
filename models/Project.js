const S = require("sequelize");
const db = require("../db");

class Project extends S.Model {}

Project.init(
  {
    project_number: {
      type: S.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    initial_date: {
      type: S.DATE,
    },
    name: {
      type: S.STRING,
    },
    direction: {
      type: S.STRING,
    },
    phone: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    salesman: {
      type: S.STRING,
    },
    sale_assistant: {
      type: S.STRING,
    },
    branch_office: {
      type: S.STRING,
    },
    payment_fulfilled: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
    internal_state: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "projects" }
);

module.exports = Project;
