// // generate a long string that is concatinated with the whole table and return to react
// let wholeTable = "";
// const rowId = document.getElementById("queryRows");

// const queryCalls = [
//   "getAllCustomers",
//   "getAllCustomers",
//   "getAllCustomers",
//   "getAllCustomers",
//   "getAllCustomers",
//   "getAllCustomers",
// ];

// export function createQueryBase(rowId) {
//   let rows = "";
//   console.log(queryCalls[0]);
//   for (let i = 0; i < queryCalls.length; i++) {
//     rows += row(queryCalls[i]);
//   }
//   rowId.innerHTML = rows;
// }

// function row(query) {
//   return `
//     <div className="col-md-4">
//         <div className="card mb-4 box-shadow">
//             <div className="card-body">
//                 <p className="card-text">Query </p>
//                 <div className="d-flex justify-content-between align-items-center">
//                 <button
//                     className="btn btn-sm btn-outline-secondary"
//                     onClick={() => ${query}}
//                 >
//                     Run query
//                 </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
// }

// // export function createHeader(val) {
// //   console.log(val);
// //   wholeTable += "<table>";
// //   for (let i = 0; i < val.length; i++) {}
// // }

// {
//   /* return generateTable.createHeader(val); */
// }
