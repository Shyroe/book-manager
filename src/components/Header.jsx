import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <Link to={"/"} className="text-light">
          <h1>Book Manager APP</h1>
        </Link>

        <Link
          to={"/products/new"}
          className="btn btn-dark nuevo-post d-block d-md-inline-block"
        >
          Add Products &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
