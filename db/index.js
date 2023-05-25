const Sequelize = require("sequelize");
// require("dotenv").config({ path: ".env" });

// DEPLOY: DATABASE_URL = postgres://localhost:5432/gestiontidi

const useSSL = process.env.DATABASE_USE_SSL==="false" ? false : true

const dbOptions = {
  logging: false,
  ssl: useSSL,
  dialectOptions: { ssl: useSSL && { require: true, rejectUnauthorized: false } },
}

const db = process.env.DATABASE_URL ? new Sequelize(process.env.DATABASE_URL, dbOptions) : new Sequelize("gestion_tidi", null, null, {host: "localhost", dialect:"postgres"})

module.exports = db;
