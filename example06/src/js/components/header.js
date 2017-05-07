import React from "react";
import ReactDOM from "react-dom";

export default class ComponentHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      miniHeader: false
    };
  }
  switchHeader() {
    this.setState({
      miniHeader: !this.state.miniHeader
    });
  }
  render() {
    let styleComponentHeader = {
      header: {
        backgroundColor: "#333",
        color: "#fff",
        paddingTop: this.state.miniHeader ? "3px" : "15px",
        paddingBottom: this.state.miniHeader ? "3px" : "15px"
      }
    };
    return (
      <header
        style={styleComponentHeader.header}
        className="smallFontSize"
        onClick={this.switchHeader.bind(this)}
      >
        <h1> this is header. </h1>
      </header>
    );
  }
}
