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

// Create Customers
// router.post("/addCustomer", async (req, res) => {
//   try {
//     const { first_name, last_name, payment_info, viewing_history } = req.body;
//     let baseSQL =
//       "INSERT INTO customers (first_name, last_name, payment_info, viewing_history) VALUES (?, ?, ?, ?);";
//     let [results, fields] = await db.execute(baseSQL, [
//       first_name,
//       last_name,
//       payment_info,
//       viewing_history,
//     ]);
//     if (results) {
//       // res.redirect("/");
//       res.send(results);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.put("/editCustomer", async (req, res) => {
//   try {
//     let {
//       customer_id,
//       default_first_name,
//       default_last_name,
//       default_payment_info,
//       default_viewing_history,
//       edited_first_name,
//       edited_last_name,
//       edited_payment_info,
//       edited_viewing_history,
//     } = req.body;
//     // if empty set to default
//     if (!edited_first_name) {
//       edited_first_name = default_first_name;
//     }
//     if (!edited_last_name) {
//       edited_last_name = default_last_name;
//     }
//     if (!edited_payment_info) {
//       edited_payment_info = default_payment_info;
//     }
//     if (!edited_viewing_history) {
//       edited_viewing_history = default_viewing_history;
//     }
//     let baseSQL =
//       "UPDATE customers SET first_name = ?, last_name = ?, payment_info = ?, viewing_history = ? WHERE customer_id = ?;";
//     let results = await db.execute(baseSQL, [
//       edited_first_name,
//       edited_last_name,
//       edited_payment_info,
//       edited_viewing_history,
//       customer_id,
//     ]);
//     if (results) res.send(customer_id.toString());
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("/getCustomerInfo", async (req, res) => {
//   const customer_id = req.query.customer_id;
//   try {
//     let baseSQL = "SELECT * FROM customers where customer_id = ?;";
//     let [results, fields] = await db.execute(baseSQL, [customer_id]);
//     if (results) res.send(results);
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.delete("/deleteCustomer/:id", async (req, res) => {
//   const customer_id = req.params.id;
//   try {
//     let baseSQL = "DELETE FROM customers WHERE customer_id = ?;";
//     db.execute(baseSQL, [customer_id]).then((response) => res.send(response));
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
