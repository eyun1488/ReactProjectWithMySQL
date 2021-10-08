import React from "react";

function Query(query) {
  let functionName = query.query.name;
  return (
    <div className="card mb-4 box-shadow">
      <div className="card-body">
        <p className="card-text">{functionName}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={query.query}
          >
            Run Query
          </button>
        </div>
      </div>
    </div>
  );
}

export default Query;
