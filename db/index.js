const Sequelize = require("sequelize");
// require("dotenv").config({ path: ".env" });

const dbOptions = process.env.DATABASE_URL ? {
  logging: false,
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
} : {
  host: "localhost", dialect:"postgres"
}

const db = new Sequelize(process.env.DATABASE_URL || "gestion_tidi", null, null, dbOptions);

module.exports = db;
