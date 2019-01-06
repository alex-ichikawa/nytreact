import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ textAlign: "center", backgroundColor: "#20315A", color: "white" }}
    className="jumbotron"
  >
          <h1 className="text-center">
        <strong>
          <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
      </h1>
  </div>
);

export default Jumbotron;
