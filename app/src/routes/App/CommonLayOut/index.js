import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import routers from '../routers';
import Header from './Header';
import * as styles from './index.module.scss';
import { setPageTitle, setModal, getAllAccountBalance, setGoBack } from '../../../store/actions';
import { PATH } from '../../../constants';
import { parseQueryString } from '../../../utils';
class CommonLayOut extends Component {
  componentDidMount() {
    const { getAllAccountBalance } = this.props;
    getAllAccountBalance();
  }

  componentDidUpdate(prevProps) {
    const { accounts: prevAccounts = [] } = prevProps;
    const { accounts = [], getAllAccountBalance } = this.props;
    if (prevAccounts.length !== accounts.length) {
      getAllAccountBalance();
    }
  }

  render() {
    const {
      accounts = [],
      pageTitle,
      history: { location: { search } = {} },
    } = this.props;
    let currentAccount = {};
    const address = parseQueryString(search).address;
    if (address) {
      currentAccount = accounts.filter((item = {}) => item.address === address)[0] || {};
    }
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
                render={(props) => (
                  <item.component {...props} {...this.props} currentAccount={currentAccount} />
                )}
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
    goBack: state.goBack,
    accounts: state.accounts,
    pageTitle: state.pageTitle,
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPageTitle: (title) => dispatch(setPageTitle(title)),
    setModal: ({ name, show, data }) => dispatch(setModal({ name, show, data })),
    getAllAccountBalance: () => dispatch(getAllAccountBalance()),
    setGoBack: (goBack) => dispatch(setGoBack(goBack)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonLayOut);
