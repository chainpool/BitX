import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import CommonLayOut from './CommonLayOut';
import { Device } from '../../utils';

import './index.module.scss';

class App extends Component {
  componentDidMount() {
    if (Device.isMobile()) {
      document.getElementById('root').setAttribute('class', 'root-mobile');
    } else {
      document.getElementById('root').setAttribute('class', 'root-desktop');
    }
  }
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
