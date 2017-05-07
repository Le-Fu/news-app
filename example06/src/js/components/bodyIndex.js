import React from "react";
import ReactDOM from "react-dom";
import BodyChild from "./bodyChild";
import PropTypes from "prop-types";
import ReactMixin from "react-mixin";
import MixinLog from "./mixins";

export default class BodyIndex extends React.Component {
  constructor() {
    super();
    this.state = { username: "Simon", age: 19, tweet: "" };
  }

  changeState() {
    this.setState({ age: "14" });
    this.refs.submitBtn.style.color = "blue";
  }

  handleChange(event) {
    var htmlButton = document.getElementById("btn");
    ReactDOM.findDOMNode(htmlButton).style.color = "red";
    MixinLog.log(); 
  }

  render() {
    return (
      <div>
        <ul>
          <li>name: {this.state.username}</li>
          <li>age: {this.state.age}</li>
          <li>tweet: {this.state.tweet}</li>
          <li>brand: {this.props.brand}</li>
        </ul>
        <input
          id="btn"
          type="button"
          value="submit"
          ref="submitBtn"
          onClick={this.changeState.bind(this)}
        />
        <BodyChild
          {...this.props}
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

BodyIndex.propTypes = {
  brand: PropTypes.string
};

BodyIndex.defaultProps = {
  brand: "360"
};

ReactMixin(BodyIndex.prototype, MixinLog);
