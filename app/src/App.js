import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AccountList from './components/AccountList';
import Guide from './components/Guide';
import NewMnemonic from './components/NewMnemonic';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Guide} />
          <Route path="/about" component={AccountList} />
          <Route path="/new" component={NewMnemonic} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
