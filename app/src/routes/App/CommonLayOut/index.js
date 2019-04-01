import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import routers from '../routers';
import Header from './Header';
import * as styles from './index.module.scss';
export default class CommonLayOut extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;
    const currentRoute = routers.filter((item) => item.path === pathname)[0];
    return (
      <div className={styles.CommonLayOut}>
        <div className={styles.header}>
          <Header {...this.props}>{currentRoute.title}</Header>
        </div>
        <div className={styles.content}>
          <Switch>
            {routers.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                render={(props) => <item.component {...props} {...this.props} />}
              />
            ))}
          </Switch>
        </div>
      </div>
    );
  }
}
