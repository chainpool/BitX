import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import AccountList from './components/AccountList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AccountList} />
          <Route path="/about" component={AccountList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
