import React, { Component } from "react";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import CommonLayOut from "./CommonLayOut";
import { Device, ipc } from "../../utils";

import "./index.module.scss";

class App extends Component {
  componentDidMount() {
    if (Device.isMobile()) {
      document.getElementById("root").setAttribute("class", "root-mobile");
    } else {
      document.getElementById("root").setAttribute("class", "root-desktop");
    }
  }
  render() {
    const Router = ipc ? HashRouter : BrowserRouter;
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={props => <CommonLayOut {...props} {...this.props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
