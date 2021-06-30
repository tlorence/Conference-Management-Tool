import React, { Component } from "react";
import { addUser } from "../../services/user";
import "./Registration.css";

export default class Registration extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    role: "",
    file: "",
    eduQualification: "",
    expertiseArea: "",
    paymentStatus: "Pending",
    approval: "Pending",
  };
  onSubmit = async () => {
    try {
      const res = addUser(this.state);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  fileHandler = async (e) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (reader.readyState === 2) {
        this.setState({ file: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    // setTimeout(() => {
    //   console.log(this.state.file);
    // }, 2000);
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    var div = (document.getElementById("file-div").style.display = "none");
  }
  roleUpdate = (e) => {
    console.log();
    var role = document.getElementById("role").value;
    var div = document.getElementById("file-div");
    console.log(div);
    if (role == "attendee") {
      div.style.display = "none";
    } else if (role == "researcher") {
      div.style.display = "block";
    } else if (role == "workshopConductor") {
      div.style.display = "block";
    }
    this.onChange(e);
  };
  render() {
    return (
      <div>
        <h1 className="p-5 text-center">Registration</h1>
        <div className=" container w-50 form-border">
          <form onSubmit={this.onSubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder=""
                onChange={this.onChange}
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="name@example.com"
                onChange={this.onChange}
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder=""
                onChange={this.onChange}
              />
            </div>

            <div class="mb-3 row">
              <div className="col">
                <label for="password" class="form-label">
                  Register as
                </label>
                <select
                  class="form-control"
                  name="role"
                  id="role"
                  onChange={this.roleUpdate}
                >
                  <option value="attendee">-Select-</option>
                  <option value="researcher">Researcher</option>
                  <option value="workshopConductor">Workshop Conductor</option>
                  <option value="attendee">Attendee</option>
                </select>
              </div>
              {/* </div>

            <div class="mb-3"> */}
              <div className="col" id="file-div">
                <label for="file" class="form-label">
                  Upload Your Research paper/Workshop proposal
                </label>
                <input
                  type="file"
                  name="file"
                  class="form-control"
                  placeholder=""
                  accept=".pdf,.doc,.docx"
                  onChange={this.fileHandler}
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="education" class="form-label">
                Education Qualifiction
              </label>
              <input
                type="text"
                name="eduQualification"
                class="form-control"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="experties" class="form-label">
                Education Qualifiction
              </label>
              <input
                type="text"
                name="expertiseArea"
                class="form-control"
                placeholder=""
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
