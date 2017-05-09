import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router';
import Index from './index';
import List from './components/list';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Route component={Index} path="/"></Route>
        <Route component={List} path="list"></Route>
      </Router>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("example"));
