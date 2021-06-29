import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  ps-5">
        <a className="navbar-brand" href="#">
          <img src="./img/logo.png" alt=""  className="logo"/>
        </a>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-5">
            <li className="nav-item m-3 active">
              <Link to="/">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                WORKSHOPS
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                REGISTRATION
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                PROGRAMS
                </a>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/">
                <a className="nav-link" href="#">
                CONTACT US
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
