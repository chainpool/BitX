import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import routers from '../routers';
import Header from './Header';
import * as styles from './index.module.scss';
import { setPageTitle, setModal, getAllAccountBalance } from '../../../store/actions';
import { PATH } from '../../../constants';
class CommonLayOut extends Component {
  componentDidMount() {
    const { accounts, getAllAccountBalance } = this.props;
    getAllAccountBalance(accounts);
  }
  render() {
    const { pageTitle } = this.props;
    return (
      <div className={styles.CommonLayOut}>
        <div className={styles.header}>
          <Header {...this.props}>{pageTitle}</Header>
        </div>
        <div className={styles.content}>
          <Switch>
            {routers.map((item, index) => (
              <Route
                exact
                key={index}
                path={item.path}
                render={(props) => <item.component {...props} {...this.props} />}
              />
            ))}
            <Redirect to={PATH.home} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    pageTitle: state.pageTitle,
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageTitle: (title) => dispatch(setPageTitle(title)),
    setModal: ({ name, show, data }) => dispatch(setModal({ name, show, data })),
    getAllAccountBalance: (accounts) => dispatch(getAllAccountBalance(accounts)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonLayOut);
