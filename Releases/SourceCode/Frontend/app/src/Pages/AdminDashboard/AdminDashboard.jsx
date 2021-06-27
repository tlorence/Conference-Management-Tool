import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "./AdminDashboard.css";
import ResearchPaper from "../ResearchPapers/ResearchPapers";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="body-align">
          <Switch>
            <Route path="/admin/reserchPapers">
              <ResearchPaper />
            </Route>
            <Route path="/admin/dashboard">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
