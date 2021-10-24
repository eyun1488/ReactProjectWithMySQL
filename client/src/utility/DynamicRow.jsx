const DynamicRow = {};

DynamicRow.tableRows = (id, rows) => {
  return (
    <tr key={id}>
      <th>{id}</th>
      {rows.map((el) => {
        return <td key={el}>{el}</td>;
      })}
    </tr>
  );
};

export default DynamicRow;
