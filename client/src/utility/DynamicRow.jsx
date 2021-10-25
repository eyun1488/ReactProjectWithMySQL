import React from "react";
import { Link } from "react-router-dom";
import DeleteUser from "../components/User/DeleteUser";
const DynamicRow = {};

DynamicRow.tableRows = (id, rows) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      {rows.map((el) => {
        return <td key={el}>{el}</td>;
      })}
      <td>
        <Link
          to={{
            pathname: `/updateUser/${rows[0]}`,
            state: { user: rows },
          }}
        >
          <button className="btn btn-primary">Update</button>
        </Link>
      </td>
      <td>
        <DeleteUser id={rows[0]} />
      </td>
    </tr>
  );
};

export default DynamicRow;
