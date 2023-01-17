import React from "react";
import { Link } from "react-router-dom";

const ErrorElem = () => {
  return (
    <div>
      <h1>Error 404 Page not Found</h1>{" "}
      <h4>
        {" "}
        <Link
          to="/"
          className="backToHomePage"
          style={{
            textDecoration: "none",
            background: "#ff5200",
            fontSize: "23px",
            padding: "5px 20px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          {" "}
          Back to home page{" "}
        </Link>
      </h4>
    </div>
  );
};

export default ErrorElem;
