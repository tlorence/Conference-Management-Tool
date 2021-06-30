import React, { Component } from "react";
import { getWorkshopProposale } from "../../services/user";
import DocumentLoader from "../components/ResearchPaper/DocumentLoader";
export default class Workshop extends Component {
  state = {
    workshops: [],
  };
  async componentDidMount() {
    const resWorkshops = await getWorkshopProposale();
    this.setState({ workshops: resWorkshops.data });
    console.log(this.state.workshops);
  }
  render() {
    return (
      <div>
        <h1>Workshops</h1>
        <div className="row">
          {this.state.workshops.map((paper) => (
            <div className=" col-3 m-2">
              {paper.file ? <DocumentLoader paper={paper} /> : ""}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
