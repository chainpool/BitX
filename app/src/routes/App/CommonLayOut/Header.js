import React, { Component } from 'react';
import * as styles from './Header.module.scss';
export default class Header extends Component {
  render() {
    return <div className={styles.Header}>{this.props.children}</div>;
  }
}
