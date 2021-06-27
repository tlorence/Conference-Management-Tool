import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "./AdminDashboard.css";
import ResearchPaper from "../ResearchPapers/ResearchPapers";
import WorkShops from '../Workshops/Workshop'
import CreateConference from '../CreateConference/CreateConference'

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="body-align">
          <Switch>
            <Route path="/admin/createConference">
              <CreateConference />
            </Route>
            <Route path="/admin/workShops">
              <WorkShops />
            </Route>
            <Route path="/admin/reserchPapers">
              <ResearchPaper />
            </Route>
            <Route path="/admin/conferenceDetails">
            {/* udin class eka import karala methanata tag eka dpn */}
            </Route>
            <Route path="/admin/">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
