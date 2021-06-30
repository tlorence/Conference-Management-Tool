import axios from "axios";
import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";
import { addConference } from "../../services/conference";
import "./CreateConference.css";

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
const components = {
  DropdownIndicator: null,
};

const createOption = (label) => ({
  label,
  value: label,
});

export default class CreateConference extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

  delete(conferenceId) {
    axios
      .delete("http://localhost:9900/conferences/delete/" + conferenceId)
      .then(() => {
        this.componentDidMount();
      });
  }

  edit(conferenceId) {
    axios
      .get(
        "http://localhost:9900/conferences/findConferenceById/" + conferenceId
      )
      .then((res) => {
        this.setState({
          conferenceId: res.data.conferenceId,
          conferenceName: res.data.conferenceName,
          date: res.data.date,
          venue: res.data.venue,
          aboutConference: res.data.aboutConference,
          keynote_speakers: res.data.keynote_speakers,
          guestSpeaker: res.data.guestSpeaker,
          conferenceTracks: res.data.conferenceTracks,
        });
      });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    let conference = {
      conferenceId: this.state.conferenceId,
      conferenceName: this.state.conferenceName,
      date: this.state.date,
      venue: this.state.venue,
      aboutConference: this.state.aboutConference,
      keynote_speakers: this.state.value,
      guestSpeaker: this.state.guestSpeaker,
      conferenceTracks: this.state.conferenceTracks,
    };
    console.log("Data to send", conference);

    const res = await addConference(conference);
  };

  handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.log(value);
    //console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value });
  };
  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };
  handleKeyDown = (e) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (e.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        console.log(value);
        console.groupEnd();
        this.setState({
          inputValue: "",
          value: [...value, inputValue],
        });
        e.preventDefault();
      default:
        break;
    }
  };

  render() {
    const { inputValue, value, isLoaded, conferences } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>Create Conference</h1>
          <div className="form-border">
            <div className="col-5">
              <form onSubmit={this.onSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="conferenceId"
                    placeholder="conference ID"
                    value={this.state.conferenceId}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Conference ID</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="conferenceName"
                    placeholder="conferenceName"
                    value={this.state.conferenceName}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Conference Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="Date"
                    className="form-control"
                    id="floatingInput"
                    name="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Date</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="venue"
                    placeholder="SLIIT"
                    value={this.state.venue}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Venue</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    Style="height: 100px"
                    name="aboutConference"
                    placeholder="aboutConference"
                    value={this.state.aboutConference}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">About Conference</label>
                </div>

                {/* <div class="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              name="keynote_speakers"
              placeholder="keynote speakers"
              value={this.state.keynote_speakers}
              onChange={this.onChange}
            />
            <label htmlFor="floatingInput">Keynote Speakers</label>
          </div> */}
                <CreatableSelect
                  components={components}
                  inputValue={inputValue}
                  isClearable
                  isMulti
                  menuIsOpen={false}
                  onChange={this.handleChange}
                  onInputChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown}
                  name="keynote_speakers"
                  placeholder="keynote speakers"
                  value={value}
                />
                <br></br>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="guestSpeaker"
                    placeholder="guestSpeaker"
                    value={this.state.guestSpeaker}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Guest Speaker</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    name="conferenceTracks"
                    placeholder="conferenceTracks"
                    value={this.state.conferenceTracks}
                    onChange={this.onChange}
                  />
                  <label htmlFor="floatingInput">Conference Tracks</label>
                </div>

                <button
                  type="submit"
                  onClick={() => window.location.reload(false)}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-4">
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
                    <th>Edit</th>
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
                          <i class="fas fa-edit"></i>
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
