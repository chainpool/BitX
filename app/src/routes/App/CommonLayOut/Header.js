import React, { Component } from 'react';
import * as styles from './Header.module.scss';
export default class Header extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className={styles.Header}>
        <i
          className="iconfont iconback1"
          onClick={() => {
            history.goBack();
          }}
        />
        {this.props.children}
      </div>
    );
  }
}
