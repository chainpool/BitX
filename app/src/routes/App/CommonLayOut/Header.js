import React, { Component } from 'react';
import * as styles from './Header.module.scss';
import { PATH } from '../../../constants';
export default class Header extends Component {
  render() {
    const {
      history,
      history: {
        location: { pathname },
      },
    } = this.props;
    const isShowBack = () => pathname !== PATH.home;
    return (
      <div className={styles.Header}>
        {isShowBack() && (
          <i
            className="iconfont iconback1"
            onClick={() => {
              history.goBack();
            }}
          />
        )}

        {this.props.children}
      </div>
    );
  }
}
