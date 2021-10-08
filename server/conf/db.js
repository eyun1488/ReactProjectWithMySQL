// get client
const mysql = require("mysql2");

// create connection Pool
const pool = mysql.createPool({
  connectionLimit: 50,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

const promisePool = pool.promise();
module.exports = promisePool;
