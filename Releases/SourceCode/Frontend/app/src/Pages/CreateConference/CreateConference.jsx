import axios from "axios";
import React, { Component } from "react";
import CreatableSelect from "react-select/creatable";

const initialState = {
  conferenceId: "",
  conferenceName: "",
  date: "",
  venue: "",
  aboutConference: "",
  keynote_speakers: [],
  guestSpeaker: "",
  conferenceTracks: [],
};
// const components = {
//   DropdownIndicator: null,
// };

// const createOption = (label: string) => ({
//   label,
//   value: label,
// });

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

  onSubmit(e) {
    e.preventDefault();
    let conference = {
      conferenceId: this.state.conferenceId,
      conferenceName: this.state.conferenceName,
      date: this.state.date,
      venue: this.state.venue,
      aboutConference: this.state.aboutConference,
      keynote_speakers: this.state.keynote_speakers,
      guestSpeaker: this.state.guestSpeaker,
      conferenceTracks: this.state.conferenceTracks,
    };
    console.log("Data to send", conference);

    axios
      .post("http://localhost:9900/conferences/add", conference)
      .then((response) => {
        alert("Conference Successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  // componentDidMount() {
  //   axios.get();
  // }

  // handleChange = (value: any, actionMeta: any) => {
  //   console.group("Value Changed");
  //   console.log(value);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  //   this.setState({ value });
  // };

  // handleInputChange = (inputValue: string) => {
  //   this.setState({ inputValue });
  // };

  // handleKeyDown = (e) => {
  //   const { inputValue, value } = this.state;
  //   if (!inputValue) return;
  //   switch (e.key) {
  //     case "Enter":
  //     case "Tab":
  //       console.group("Value Added");
  //       console.log(value);
  //       console.groupEnd();
  //       this.setState({
  //         inputValue: "",
  //         value: [...value, createOption(inputValue)],
  //       });
  //       e.preventDefault();
  //     default:
  //       return "";
  //   }
  // };

  render() {
    const { inputValue, value } = this.state;
    return (
      <div className="container-fluid">
        <h1>Create Conference</h1>
        <form onSubmit={this.onSubmit}>
          <div class="form-floating mb-3">
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
          <div class="form-floating mb-3">
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
          <div class="form-floating mb-3">
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
          <div class="form-floating mb-3">
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
          <div class="form-floating mb-3">
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
            //components={components}
            inputValue={inputValue}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={this.handleChange}
            onInputChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            placeholder="Keynote Speakers"
            value={value}
          />
          <br></br>
          <div class="form-floating mb-3">
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
          <div class="form-floating mb-3">
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
