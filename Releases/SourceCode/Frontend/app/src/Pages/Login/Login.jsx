import React, { Component } from "react";
import { userLogin } from "../../services/user";
import "./Login.css";
import Swal from "sweetalert2";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  //user login
  submitLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:9900/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res.role);
          localStorage.setItem("user", JSON.stringify(res));
          if (res.role === "researcher") {
            window.location = "/researcher/";
          } else if (res.role === "workshopConductor") {
            window.location = "/workshopPresenter";
          } else if (res.role === "admin") {
            
            window.location = "/admin";
          } else {
            Swal.fire({
              icon: "error",
              title: "Incorrect email or password",
              text: "Please try again!",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "Incorrect email or password",
            text: "Please try again!",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="Login">
        <div className="col-50">
          <h3 className="h3">Login</h3>
          <div className="containerLogin">
            <form onSubmit={this.submitLogin}>
              <div>
                <label className="labelLogin">Email</label>
              </div>
              <div className="formField">
                <input
                  className="loginText"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  //   value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="labelLogin">Password</label>
              </div>
              <div className="formField">
                <input
                  className="loginText"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                  //   value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input type="submit" value="Login" className="btnLogin" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
