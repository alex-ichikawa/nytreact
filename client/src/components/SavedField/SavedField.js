import React from "react";

const SavedField = ({ children }) => (
    <div className="row">
      <div className="col-sm-12">
        <br />

        <div className="card">

          <div className="card-header">
            <strong>
              <i className="fa fa-table"></i> Saved Articles</strong>
          </div>

          <div className="card-body" id="article-section">
          </div>
        </div>
      </div>
    </div>
);

export default SavedField;