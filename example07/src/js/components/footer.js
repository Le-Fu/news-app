import React from "react";
import ReactDOM from "react-dom";

let footerCss = require("../../css/footer.css");

export default class ComponentFooter extends React.Component {
  render() {
    return (
      <footer class={footerCss.miniFooter}>
        <h1>
          this is footer.
        </h1>
      </footer>
    );
  }
}
