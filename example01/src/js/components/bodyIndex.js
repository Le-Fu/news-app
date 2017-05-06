import React from "react";
import ReactDOM from "react-dom";

export default class BodyIndex extends React.Component {
  componentWillMount() {
    console.log("BodyIndex_componentWillMount");
  }
  componentDidMount() {
    console.log("BodyIndex_componentDidMount");    
  }
  render() {
    let name = "";
    console.log("BodyIndex_render");
    return (
      <div>
        <h1>{name ? "Hello " + name : "Please log in."}</h1>
      </div>
    );
  }
}
