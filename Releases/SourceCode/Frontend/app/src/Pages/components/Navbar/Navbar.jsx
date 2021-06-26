import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  ps-5">
        <a className="navbar-brand" href="#">
          LOGO
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-5">
            <li className="nav-item m-3 active">
              <Link to="/">
                <a className="nav-link" href="#">
                  ITEM
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                ITEM
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                ITEM
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                ITEM
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}
