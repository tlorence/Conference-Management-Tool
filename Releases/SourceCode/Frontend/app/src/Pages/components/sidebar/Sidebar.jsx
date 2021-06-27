import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { imagePath } from "../../../services";

export default function Sidebar(props) {
  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark sidebar-align">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href=""
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <img
                  src={`${imagePath}logo.png`}
                  alt=""
                  className="ms-5 w-50 logo-white"
                />
              </a>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-3"
                id="menu"
              >
                {props.items.map((item) => (
                  <li class="nav-item mt-3">
                    <a href="" class="nav-link align-middle px-0">
                      <Link to={item.path}>
                        {item.icon}
                        <span class="ms-1 d-none d-sm-inline">{item.name}</span>
                      </Link>
                    </a>
                  </li>
                ))}
              </ul>
              <hr />
              <div class="dropdown pb-4">
                <a
                  href=""
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    class="rounded-circle"
                  />
                  <span class="d-none d-sm-inline mx-1">User</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a class="dropdown-item" href="">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
