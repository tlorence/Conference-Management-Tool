import React, { Component } from "react";
import axios from "axios";
import "./Conference.css";

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
export default class Conference extends Component {
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
          <h1>Conference Details</h1>
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
