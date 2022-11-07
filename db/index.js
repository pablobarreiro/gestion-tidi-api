const Sequelize = require("sequelize");
// require("dotenv").config({ path: ".env" });

// DEPLOY: DATABASE_URL = postgres://localhost:5432/gestiontidi

const dbOptions = {
  logging: false,
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
}

const db = process.env.DATABASE_URL ? new Sequelize(process.env.DATABASE_URL, dbOptions) : new Sequelize("gestion_tidi", null, null, {host: "localhost", dialect:"postgres"})

module.exports = db;
