import React from "react";

const ResultField = ({ children }) => (
    <div className="row">
      <div className="col-sm-12">
        <br />

        <div className="card">

          <div className="card-header">
            <strong>
              <i className="fa fa-table"></i> Top Articles</strong>
          </div>

          <div className="card-body" id="article-section">
          </div>
        </div>
      </div>
    </div>
);

export default ResultField;