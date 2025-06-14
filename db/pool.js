require("dotenv").config();
const { Pool } = require("pg");

const env = process.env;

module.exports = new Pool({
  host: env.PGHOST,
  user: env.PGUSER,
  database: env.PGDATABASE,
  password: env.PGPASSWORD,
  port: env.PGPORT,
});
