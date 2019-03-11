import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import AccountList from './components/AccountList';
import Guide from './components/Guide';
import NewMnemonic from './components/NewMnemonic';
import PasswordSetting from './components/PasswordSetting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Guide} />
          <Route path="/about" component={AccountList} />
          <Route path="/new" component={NewMnemonic} />
          <Route path="/password" component={PasswordSetting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
