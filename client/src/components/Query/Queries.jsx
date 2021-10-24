import React, { useState } from "react";
import Query from "./Query";
import QueryTable from "./QueryTable";

// container for all queries and buttons
function Queries() {
  let [results, setResults] = useState([]);

  const baseURL = "http://localhost:4000";

  // put the list of all the routes in the array.
  const endpoints = [
    "/showAllCustomers",
    "/showAllThings",
    "/showAllThingsThings",
  ];

  return (
    <div>
      <h1>Queries</h1>
      <section>
        <div className="album py-5 bg-light">
          <div className="container-fluid">
            <div className="row">
              {endpoints.map((route) => {
                return (
                  <Query
                    key={route}
                    response={setResults}
                    api={baseURL + route}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <QueryTable data={results} />
    </div>
  );
}

export default Queries;
