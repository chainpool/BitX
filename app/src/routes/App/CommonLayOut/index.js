import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import routers from "../routers";
import Warning from "./Warning";
import Header from "./Header";
import * as styles from "./index.module.scss";
import {
  setPageTitle,
  setModal,
  getAllAccountBalance,
  setGoBack,
  setSeenWarning
} from "../../../store/actions";
import { PATH } from "../../../constants";
import { bitJS, parseQueryString } from "../../../utils";

class CommonLayOut extends Component {
  componentDidMount() {
    bitJS.update();
  }

  render() {
    const {
      accounts = [],
      pageTitle,
      history: { location: { search } = {} },
      app,
      setSeenWarning
    } = this.props;

    let currentAccount = {};
    const address = parseQueryString(search).address;
    if (address) {
      currentAccount =
        accounts.filter((item = {}) => item.address === address)[0] || {};
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
                render={props => (
                  <item.component
                    {...props}
                    {...this.props}
                    currentAccount={currentAccount}
                  />
                )}
              />
            ))}
            <Redirect to={PATH.home} />
          </Switch>
        </div>
        {!app.seenWarning && <Warning setSeen={setSeenWarning} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goBack: state.goBack,
    accounts: state.accounts,
    pageTitle: state.pageTitle,
    modal: state.modal,
    menu: state.menu,
    app: state.app
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPageTitle: title => dispatch(setPageTitle(title)),
    setModal: ({ name, show, data }) =>
      dispatch(setModal({ name, show, data })),
    getAllAccountBalance: () => dispatch(getAllAccountBalance()),
    setGoBack: goBack => dispatch(setGoBack(goBack)),
    setSeenWarning: () => dispatch(setSeenWarning())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommonLayOut);
