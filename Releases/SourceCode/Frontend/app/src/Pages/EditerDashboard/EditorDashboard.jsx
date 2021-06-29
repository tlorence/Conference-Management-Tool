import React, { Component } from "react";
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
export default class EditorDashboard extends Component {
  state = {
    editorSideItems: [
      {
        name: "Dashboard",
        path: "/editor",
        icon: (
          <FontAwesomeIcon
            icon={faTachometerAlt}
            color="white"
            className="me-3"
            size="2x"
          />
        ),
      },

      {
        name: "Create Conference",
        path: "/editor/createConference",
        icon: (
          <FontAwesomeIcon
            icon={faCalendarPlus}
            color="white"
            className="me-3"
            size="2x"
          />
        ),
      },
      {
        name: "Conference Details",
        path: "/editor/conferenceDetails",
        icon: (
          <FontAwesomeIcon
            icon={faHandshake}
            color="white"
            className="me-3"
            size="2x"
          />
        ),
      },
    ],
  };
  render() {
    return (
      <div>
        <Sidebar items={this.state.editorSideItems} />
        <div className="body-align">
          <Switch>
            <Route path="/editor/createConference">
              <CreateConference />
              </Route>
              <Route path="/editor/conferenceDetails">
              {/* udin class eka import karala methanata tag eka dpn */}
            </Route>
            <Route path="/editor/">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
