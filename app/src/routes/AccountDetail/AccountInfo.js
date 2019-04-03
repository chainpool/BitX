import React from 'react';
import { Mixin, Clipboard } from '../../components';
import * as styles from './AccountInfo.module.scss';

export default class AccountInfo extends Mixin {
  render() {
    const { currentAccount = {} } = this.props;
    return (
      <div className={styles.AccountInfo}>
        <div className={styles.amount}>
          {currentAccount.balanceShow}
          <span>BTC</span>
        </div>
        <div className={styles.address}>
          <Clipboard>{currentAccount.address}</Clipboard>
        </div>
        <div className={styles.watchother}>在浏览器中查看</div>
      </div>
    );
  }
}
