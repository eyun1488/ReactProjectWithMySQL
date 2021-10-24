import Table from "react-bootstrap/Table";
import DynamicRow from "./DynamicRow";
const DynamicTable = {};

DynamicTable.tableHead = (headers) => {
  return (
    <thead>
      <tr>
        <th>#</th>
        {headers.map((columnHeader) => {
          return <th key={columnHeader}>{columnHeader}</th>;
        })}
      </tr>
    </thead>
  );
};

// DynamicTable.tableRows = (id, rows) => {
//   return (
//     <tr key={id}>
//       <th>{id}</th>
//       {rows.map((el) => {
//         return <td key={el}>{el}</td>;
//       })}
//     </tr>
//   );
// };

DynamicTable.tableData = (data) => {
  return (
    <tbody key={data.length}>
      {data.map((row, index) => {
        return DynamicRow.tableRows(index, Object.values(row));
      })}
    </tbody>
  );
};

DynamicTable.Builder = (data) => {
  let keys = Object.keys(data[0]);
  let headers = DynamicTable.tableHead(keys);
  let rows = DynamicTable.tableData(data);
  return (
    <Table responsive striped bordered hover>
      {headers}
      {rows}
    </Table>
  );
};

export default DynamicTable;
