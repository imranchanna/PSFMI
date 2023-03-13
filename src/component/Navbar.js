import React from "react";
import "./Navbar.css";
import background from "./images/Background.png";
import logo from "./images/logo.png";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate("");
  return (
    <>
      <div className="container2">
        <img className="background" src={background} alt="pokemon"></img>
        <h3 className="h3">
          Private Security and Firearms Management Information System
        </h3>
        <img className="logo" src={logo} alt="pokemon"></img>
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <div className="ul">
                <ul class="navbar-nav nav  me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a
                          onClick={() => navigate("/Profile")}
                          class="dropdown-item"
                          href="#"
                        >
                          Personnel
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Company")}
                          class="dropdown-item"
                          href="#"
                        >
                          PSO
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Firearms")}
                          class="dropdown-item"
                          href="#"
                        >
                          Firearms
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Motor")}
                          class="dropdown-item"
                          href="#"
                        >
                          Motor Vehicle
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Incident")}
                          class="dropdown-item"
                          href="#"
                        >
                          Incident Reporting
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Apply
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Director
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Shareholder
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Civilian
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Unarmed Guard
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Armed Guard
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Close Protection Officer
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Private Investigator
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Reports
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a class="dropdown-item" href="#">
                          Operators License
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Gun Movement
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Recruitment
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Training
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Registration")}
                          class="dropdown-item"
                          href="#"
                        >
                          Registration Certificate
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => navigate("/Identity")}
                          class="dropdown-item"
                          href="#"
                        >
                          ID
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <form class="d-flex">
                <span onClick={() => navigate("/")} class="h4" type="submit">
                  <MdLogout />
                </span>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

