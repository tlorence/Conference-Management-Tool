import React, { Component } from "react";
import "./AdminDashboard.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import ResearchPaper from "../ResearchPapers/ResearchPapers";
import WorkShops from "../Workshops/Workshop";
import CreateConference from "../CreateConference/CreateConference";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export default class AdminDashboard extends Component {
  state = {
    adminSideItems: [
      {
        name: "Dashboard",
        path: "/admin",
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
        path: "/admin/reserchPapers",
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
        path: "/admin/workShops",
        icon: (
          <FontAwesomeIcon
            icon={faUserCog}
            color="white"
            className=""
            size="2x"
          />
        ),
      },
      {
        name: "Create Conference",
        path: "/admin/createConference",
        icon: (
          <FontAwesomeIcon
            icon={faCalendarPlus}
            color="white"
            className=""
            size="2x"
          />
        ),
      },
      {
        name: "Conference Details",
        path: "/admin/conferenceDetails",
        icon: (
          <FontAwesomeIcon
            icon={faHandshake}
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
        <Sidebar items={this.state.adminSideItems} />
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
