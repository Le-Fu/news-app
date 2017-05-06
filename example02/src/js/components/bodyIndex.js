import React from "react";
import ReactDOM from "react-dom";

export default class BodyIndex extends React.Component {
  constructor() {
    super();
    this.state = { username: "Simon" };
  }
  render() {
    setTimeout(() => {
      this.setState({
        username: "Meng"
      });
    }, 4000);
    return (
      <div>
        <p>this is the main content.</p>
        <h2> {this.state.username} </h2>
      </div>
    );
  }
}
