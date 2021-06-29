import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

import ResearchPaper from "../ResearchPapers/ResearchPapers";
import WorkShops from "../Workshops/Workshop";
import CreateConference from "../CreateConference/CreateConference";
import "./ReviewerDashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
export default class ReviewerDashboard extends Component {
  state = {
    reviewerSideItems: [
      {
        name: "Dashboard",
        path: "/reviewer",
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
        path: "/reviewer/reserchPapers",
        icon: (
          <FontAwesomeIcon
            icon={faSearch}
            color="white"
            className=""
            size="2x"
          />
        ),
      },
      {
        name: "Workshops",
        path: "/reviewer/workShops",
        icon: (
          <FontAwesomeIcon
            icon={faUserCog}
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
        <Sidebar items={this.state.reviewerSideItems} />
        <div className="body-align">
          <Switch>
            <Route path="/reviewer/workShops">
              <WorkShops />
            </Route>
            <Route path="/reviewer/reserchPapers">
              <ResearchPaper />
            </Route>

            <Route path="/reviewer/">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
