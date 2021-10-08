import React, { useState } from "react";
import { Link } from "react-router-dom";
import Query from "./Query";
import axios from "axios";

function Home() {
  const [customerList, setCustomerList] = useState([]);
  const [columnNameList, setColumnNameList] = useState([]);

  const showAllCustomers = async () => {
    axios.get("http://localhost:4000/getAllCustomers").then((response) => {
      setColumnNameList(response.data.field);
      setCustomerList(response.data.results);
    });
  };

  const showAllThings = async () => {
    axios.get("http://localhost:4000/getAllThings").then((response) => {
      setColumnNameList(response.data.field);
      setCustomerList(response.data.results);
    });
  };

  const showAllThingsThings = async () => {
    axios.get("http://localhost:4000/getAllThingsThings").then((response) => {
      setColumnNameList(response.data.field);
      setCustomerList(response.data.results);
    });
  };
  // under navbar there are an array of function and this array holds each function call
  const queryCalls = [showAllCustomers, showAllThings, showAllThingsThings];

  // we do not need to render a new page and can delete directly from here.
  const deleteCustomer = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:4000/user/deleteCustomer/${id}`)
      .then((response) => {
        if (response) {
          setCustomerList(
            customerList.filter((val) => {
              return val.customer_id !== id;
            })
          );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section>
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
      </section>
      <div>
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
              {/* need to fix later. the idea is that you need to check if the button is clicked than render */}
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
                  {/* <td>{val.gender}</td>
                  <td>{val.username}</td>
                  <td>{val.password}</td>
                  <td>{val.email}</td> */}
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
                  {/* <td>
                    <Link
                      to={{
                        pathname: `/deleteUser/${val.customer_id}`,
                        state: { user: val },
                      }}
                    >
                      <button className="btn btn-danger">Delete</button>
                    </Link>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;
