import React from "react";
import axios from "axios";

function DeleteUser({ id }) {
  const deleteCustomer = (id) => {
    axios.delete(`http://localhost:4000/user/deleteCustomer/${id}`);
  };

  return (
    <button className="btn btn-danger" onClick={() => deleteCustomer(id)}>
      Delete
    </button>
  );
}

export default DeleteUser;
