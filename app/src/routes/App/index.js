import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import CommonLayOut from './CommonLayOut';

import './index.module.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => <CommonLayOut {...props} {...this.props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
