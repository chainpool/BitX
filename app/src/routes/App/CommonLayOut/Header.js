import React, { Component } from "react";
import * as styles from "./Header.module.scss";
import { PATH } from "../../../constants";
import { isFunction } from "../../../utils";
import classnames from "classnames";

export default class Header extends Component {
  render() {
    const {
      history,
      history: {
        location: { pathname }
      },
      goBack,
      menu: { show, cb }
    } = this.props;
    const isShowBack = () => pathname !== PATH.home;
    console.log(this.props);
    return (
      <div className={styles.Header}>
        {isShowBack() && (
          <i
            className={classnames("iconfont iconback1", styles.back)}
            onClick={() => {
              if (isFunction(goBack)) {
                goBack();
              } else {
                history.goBack();
              }
            }}
          />
        )}

        {this.props.children}
        {show && (
          <i
            className={classnames("iconfont iconback1", styles.menu)}
            onClick={() => cb()}
          />
        )}
      </div>
    );
  }
}
