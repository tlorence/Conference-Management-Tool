import axios from "axios";
import React, { Component } from "react";
import "./ConferenceApproval.css";

const initialState = {
  conferences: [],
  conferenceId: "",
  conferenceName: "",
  date: "",
  venue: "",
  aboutConference: "",
  keynote_speakers: [],
  guestSpeaker: "",
  conferenceTracks: [],
  inputValue: "",
  value: [],
};

export default class ConferenceApproval extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    axios
      .get("http://localhost:9900/conferences/getAllConferences")
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          conferences: result.data,
        });
      });
    console.log(this.state.conferences);
  }

  render() {
    const { isLoaded, conferences } = this.state;
    return (
      <div className="container-fluid">
        <div>
          <h1>Conference Approval</h1>
          <div className="form-border">
            <div className="col s6">
              <table className="table table-success table-striped" id="table1">
                <thead>
                  <tr>
                    <th>Conference ID</th>
                    <th>Conference Name</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>About Conference</th>
                    <th>Keynote Speakers</th>
                    <th>Guest Speaker</th>
                    <th>Approve</th>
                    <th>Reject</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {conferences.map((conference) => (
                    <tr key={conference.conferenceId}>
                      <td>{conference.conferenceId}</td>
                      <td>{conference.conferenceName}</td>
                      <td>{conference.date}</td>
                      <td>{conference.venue}</td>
                      <td>{conference.aboutConference}</td>
                      <td>{conference.keynote_speakers}</td>
                      <td>{conference.guestSpeaker}</td>
                      <td>
                        <button
                          onClick={(e) => this.edit(conference.conferenceId)}
                          className="btn waves-effect waves-light right"
                        >
                          <i class="fas fa-check"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={(e) => this.delete(conference.conferenceId)}
                          className="btn waves-effect waves-light right"
                        >
                          <i class="fas fa-times-circle"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={(e) => this.delete(conference.conferenceId)}
                          className="btn waves-effect waves-light right"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
