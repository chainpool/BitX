import React, { Component } from 'react';
import BitX from '../../resources/Bitx.png';
import * as styles from './SelectModeGetAccount.module.scss';

class SelectModeGetAccount extends Component {
  render() {
    const { changeClose } = this.props;
    return (
      <div className={styles.SelectModeGetAccount}>
        <div className={styles.close} onClick={changeClose}>
          <i className="iconfont iconClose" />
        </div>
        <div className={styles.bitx}>
          <img src={BitX} height={55} />
        </div>
        <div className={styles.routerbutton}>
          <button>创建账户</button>
          <button>导入账户</button>
        </div>
      </div>
    );
  }
}

export default SelectModeGetAccount;
