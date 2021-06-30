import React, { Component } from "react";

export default class Conference extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Conference Details</h1>
        {this.props.data}
      </div>
    );
  }
}
