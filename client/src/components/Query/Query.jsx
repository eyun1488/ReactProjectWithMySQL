import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Axios from "axios";

function Query({ api, response }) {
  const callQuery = async (endpoint) => {
    try {
      Axios.get(endpoint).then((res) => {
        response(res.data.results);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{api.split("/").pop()}</Card.Title>
          <Button
            onClick={(e) => {
              callQuery(api);
            }}
          >
            Call Query
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Query;
