import React from 'react';
import { Mixin } from '../../components';
import * as styles from './KnowAbout.module.scss';

export default class KnowAbout extends Mixin {
  pageTitle = '备份助记词';
  render() {
    const { changeStep } = this.props;
    return (
      <div className={styles.KnowAbout}>
        <i className="iconfont iconsuo" />
        <div className={styles.content}>
          在BitX上生成或导入的助记词和私钥
          <br />
          由用户自己保管！平台方并无备份
        </div>
        <button onClick={() => changeStep(2)}>我已了解</button>
      </div>
    );
  }
}
