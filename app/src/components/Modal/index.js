import React, { Component } from 'react';

import * as styles from './index.module.scss';

export default class Modal extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={styles.Modalcontainer}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <i className="iconfont iconClose" />
          </div>
        </div>
      </div>
    );
  }
}
