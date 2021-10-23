const express = require("express");
const router = express.Router();
const db = require("../conf/db");

// Home page routes
router.get("/showAllCustomers", async (req, res) => {
  try {
    let baseSQL = "SELECT * FROM customers;";
    let [results, field] = await db.execute(baseSQL, []);
    if (results && results.length) {
      res.send({ results: results, field: field });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/showAllThings", async (req, res) => {
  try {
    let baseSQL = "SELECT * FROM customers;";
    let [results, field] = await db.execute(baseSQL, []);
    if (results && results.length) {
      res.send({ results: results, field: field });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/showAllThingsThings", async (req, res) => {
  //   try {
  //     let baseSQL = "SELECT * FROM customers;";
  //     let [results, field] = await db.execute(baseSQL, []);
  //     if (results && results.length) {
  //       //   console.log(results);
  //       res.send({ results: results, field: field });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
});
// End of Home page routes

module.exports = router;
