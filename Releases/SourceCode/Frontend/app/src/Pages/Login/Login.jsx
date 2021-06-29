import React, {Component, useState} from 'react';
import "./Login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <div className="col-50">
                    <h3 className="h3">Login</h3>
                    <div className="containerLogin">
                        <form onSubmit={this.handleSubmit}>
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
                                    value={this.state.email}
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
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input type="submit" value="Login" className="btnLogin"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

