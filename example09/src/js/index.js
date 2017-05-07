var React = require("react");
var ReactDOM = require("react-dom");
import ComponentHeader from "./components/header";
import ComponentFooter from "./components/footer";
import ComponentIndexBody from "./components/bodyIndex";

import "antd/dist/antd.css";

class Index extends React.Component {
  componentWillMount() {
    console.log("Index-componentWillMount");
  }
  componentDidMount() {
    console.log("Index-componentDidMount");
  }
  render() {
    console.log("Index-render");
    return (
      <div>
        <ComponentHeader />
        <ComponentIndexBody />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
