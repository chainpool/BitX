import React from 'react';
import QRious from 'qrious';
import { Mixin } from '../../components';
import * as styles from './AccountReceive.module.scss';

export default class AccountAccept extends Mixin {
  startInit = () => {
    const { currentAccount } = this.props;
    new QRious({
      size: 190,
      element: document.getElementById('qr'),
      value: currentAccount.address,
    });
  };
  render() {
    return (
      <div className={styles.AccountReceive}>
        <canvas id="qr" />
        <div className={styles.desc}>地址二维码</div>
      </div>
    );
  }
}