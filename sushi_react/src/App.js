import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogIN from "./Login";
import Admin from "./Admin";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LogIN} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
