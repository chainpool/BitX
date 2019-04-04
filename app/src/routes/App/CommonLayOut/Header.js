import React, { Component } from 'react';
import * as styles from './Header.module.scss';
import { PATH } from '../../../constants';
import { isFunction } from '../../../utils';

export default class Header extends Component {
  render() {
    const {
      history,
      history: {
        location: { pathname },
      },
      goBack,
    } = this.props;
    const isShowBack = () => pathname !== PATH.home;
    return (
      <div className={styles.Header}>
        {isShowBack() && (
          <i
            className="iconfont iconback1"
            onClick={() => {
              if (isFunction(goBack)) {
                goBack();
              } else {
                history.goBack();
              }
              isFunction(goBack) && goBack();
            }}
          />
        )}

        {this.props.children}
      </div>
    );
  }
}
