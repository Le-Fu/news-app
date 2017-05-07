import React from "react";
import ReactDOM from "react-dom";

export default class ComponentHeader extends React.Component {
  render() {
    const styleComponentHeader = {
      header: {
        backgroundColor: "#333",
        color: "#fff",
        paddingTop: "15px",
        paddingBottom: "15px"
      }
    };
    return (
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1> this is header. </h1>
      </header>
    );
  }
}
