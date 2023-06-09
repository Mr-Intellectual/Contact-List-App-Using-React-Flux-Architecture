import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navbar-brand text-white">Home</div>
        </Link>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" id="navbarIcon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto text-center ">
            <Link className="nav-link text-white" to="/contact">
              <p
                className="fs-6 m-0"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Contact List
              </p>
            </Link>
            <Link className="nav-link text-white" to="/form">
              <p
                className="fs-6 m-0"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                Contact Forms
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
