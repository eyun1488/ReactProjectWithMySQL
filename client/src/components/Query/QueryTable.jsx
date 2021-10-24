import React from "react";
import DynamicTable from "../../utility/DynamicTable";
// import Table from "react-bootstrap/Table";

function QueryTable({ data }) {
  return <div>{data.length !== 0 && DynamicTable.Builder(data)}</div>;
}

export default QueryTable;
