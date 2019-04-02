import React from 'react';
import { Mixin, Clipboard } from '../../components';
import * as styles from './AccountInfo.module.scss';

export default class AccountInfo extends Mixin {
  render() {
    return (
      <div className={styles.AccountInfo}>
        <div className={styles.amount}>
          1.34567828<span>BTC</span>
        </div>
        <div className={styles.address}>
          <Clipboard>1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG</Clipboard>
        </div>
        <div className={styles.watchother}>在浏览器中查看</div>
      </div>
    );
  }
}
