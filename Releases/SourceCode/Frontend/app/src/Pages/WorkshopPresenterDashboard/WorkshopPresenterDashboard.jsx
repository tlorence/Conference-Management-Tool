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

export default class WorkshopPresenterDashboard extends Component {
  state = {
    workshopPresenterSideItems: [
      {
        name: "Dashboard",
        path: "/workshopPresenter",
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
        name: "Workshops",
        path: "/workshopPresenter/workShops",
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
        name: "Conference Details",
        path: "/workshopPresenter/conferenceDetails",
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
        <Sidebar items={this.state.workshopPresenterSideItems} />
        <div className="body-align">
          <Switch>
            <Route path="/workshopPresenter/workShops">
              <WorkShops />
            </Route>
            <Route path="/workshopPresenter/conferenceDetails">
              {/* udin class eka import karala methanata tag eka dpn */}
            </Route>
            <Route path="/workshopPresenter/">
              <h1>Dashboard App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
