import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "./ResearcherDashboard.jsx";
import ResearchPaper from "../ResearchPapers/ResearchPapers";
import WorkShops from "../Workshops/Workshop";
import CreateConference from "../CreateConference/CreateConference";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export default class ResearcherDashboard extends Component {
  state = {
    researcherSideItems: [
      {
        name: "Dashboard",
        path: "/researcher",
        icon: (
          <FontAwesomeIcon
            icon={faTachometerAlt}
            color="white"
            className=""
            size="2x"
          />
        ),
      },
      {
        name: "Research Paper",
        path: "/researcher/reserchPapers",
        icon: (
          <FontAwesomeIcon
            icon={faSearch}
            color="white"
            className=""
            size="2x"
          />
        ),
      },
    ],
  };
  render() {
    return (
      <div>
        <Sidebar items={this.state.researcherSideItems} />
        <div className="body-align">
          <Switch>
            <Route path="/researcher/reserchPapers">
              <ResearchPaper />
            </Route>
            <Route path="/researcher/">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
