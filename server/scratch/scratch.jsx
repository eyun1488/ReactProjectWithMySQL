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

// const [customerList, setCustomerList] = useState([]);
  // const [columnNameList, setColumnNameList] = useState([]);

  // const showAllCustomers = async () => {
  //   axios.get("http://localhost:4000/getAllCustomers").then((response) => {
  //     // console.log(Object.keys(response.data.results[0]));
  //     setColumnNameList(response.data.field);
  //     setCustomerList(response.data.results);
  //   });
  // };

  // const showAllThings = async () => {
  //   // axios.get("http://localhost:4000/getAllThings").then((response) => {
  //   //   setColumnNameList(response.data.field);
  //   //   setCustomerList(response.data.results);
  //   // });
  // };

  // const showAllThingsThings = async () => {
  //   // axios.get("http://localhost:4000/getAllThingsThings").then((response) => {
  //   //   setColumnNameList(response.data.field);
  //   //   setCustomerList(response.data.results);
  //   // });
  // };

  // // under navbar there are an array of function and this array holds each function call
  // const queryCalls = [showAllCustomers, showAllThings, showAllThingsThings];

  // const callQuery = async (endpoints) => {
  //   let baseURL = "http://localhost:4000" + endpoints;
  //   axios.get(baseURL).then((response) => {
  //     setColumnNameList(response.data.field);
  //     setCustomerList(response.data.results);
  //   });
  // };

  // const endpoints = [
  //   "/getAllCustomers",
  //   "/showAllThings",
  //   "/showAllThingsThings",
  //   "/deleteCustomer"
  // ];

  // we do not need to render a new page and can delete directly from here.
  // const deleteCustomer = (id) => {
  //   // console.log(id);
  //   axios
  //     .delete(`http://localhost:4000/user/deleteCustomer/${id}`)
  //     .then((response) => {
  //       if (response) {
  //         setCustomerList(
  //           customerList.filter((val) => {
  //             return val.customer_id !== id;
  //           })
  //         );
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  {/* <section>
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              {queryCalls.map((val, key) => {
                return (
                  <div className="col-md-4" key={val.toString()}>
                    <Query query={val} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      {/* delete this and insert the Table dynamically */}
      {/* <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-light">
            <tr>
              {columnNameList.map((val, key) => {
                return (
                  <th key={val._catalogStart} scope="col">
                    {val.name}
                  </th>
                );
              })}
              need to fix later. the idea is that you need to check if the button is clicked than render
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {customerList.map((val, key) => {
              return (
                <tr key={val.customer_id}>
                  <th scope="row">{val.customer_id}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.gender}</td>
                  <td>{val.username}</td>
                  <td>{val.password}</td>
                  <td>{val.email}</td>
                  <td>{val.payment_info}</td>
                  <td>{val.viewing_history}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/updateUser/${val.customer_id}`,
                        state: { user: val },
                      }}
                    >
                      <button className="btn btn-primary">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCustomer(val.customer_id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: `/deleteUser/${val.customer_id}`,
                        state: { user: val },
                      }}
                    >
                      <button className="btn btn-danger">Delete</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}