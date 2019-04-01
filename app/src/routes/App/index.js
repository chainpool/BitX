import React,{Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import AccountList from '../AccountList'
import './index.module.css';

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" component={AccountList} />} />
        </Switch>
      </Router>
    );
  }

}

export default App;
