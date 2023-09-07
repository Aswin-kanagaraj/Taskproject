import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../images/Dashboard.jpg";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary mt-2 mb-5">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" exact to="/">
                  {" "}
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" exact to="/singup">
                  {" "}
                  Signup
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
