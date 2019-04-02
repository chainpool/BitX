import React from 'react';
import { Mixin } from '../../components';
import * as styles from './SaveMnemonic.module.scss';

export default class SaveMnemonic extends Mixin {
  render() {
    const { mnemonic = [], changeStep } = this.props;
    return (
      <div className={styles.SaveMnemonic}>
        <div className={styles.desc}>
          请将以下12个单词记在纸上
          <br />
          我们会在之后进行验证
        </div>
        <div className={styles.generatewords}>{mnemonic.join(' ')}</div>
        <button onClick={() => changeStep(3)}>我已备份</button>
      </div>
    );
  }
}
