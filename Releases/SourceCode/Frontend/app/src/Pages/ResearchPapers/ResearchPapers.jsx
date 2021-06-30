import React, { Component } from "react";
import { getResearchpapers } from "../../services/user";
import DocumentLoader from "../components/ResearchPaper/DocumentLoader";
export default class ResearchPapers extends Component {
  constructor(props) {
    super(props);
    this.state = { papers: [] };
  }
  async componentDidMount() {
    const resResearch = await getResearchpapers();
    this.setState({ papers: resResearch.data });
  }

  render() {
    return (
      <div>
        <h1>Research Papers</h1>
        <div className="row">
          {this.state.papers.map((paper) => (
            <div className=" col-3 m-2">
              {paper.file ? <DocumentLoader paper={paper} /> : ""}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
