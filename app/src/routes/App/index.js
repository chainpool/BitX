import React, { useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import CommonLayOut from "./CommonLayOut";
import { Device, ipc } from "../../utils";

import "./index.module.scss";

function App(appProps) {
  useEffect(() => {
    if (Device.isMobile()) {
      document.getElementById("root").setAttribute("class", "root-mobile");
    } else {
      document.getElementById("root").setAttribute("class", "root-desktop");
    }
  }, []);

  const Router = ipc ? HashRouter : BrowserRouter;
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={props => <CommonLayOut {...props} {...appProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
