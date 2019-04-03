import React from 'react';
import { Mixin, Input, Modal } from '../../components';
import { Patterns } from '../../utils';
import * as styles from './SignModal.module.scss';

export default class SignModal extends Mixin {
  state = {
    password: '',
    passwordErrMsg: '',
  };

  checkAll = {
    checkPassword: () => {
      const { password } = this.state;
      let err = Patterns.check('required')(password);
      this.setState({
        passwordErrMsg: err,
      });
      return err;
    },
    confirm: () => {
      return ['checkPassword'].every((item) => !this.checkAll[item]());
    },
  };
  render() {
    const { checkAll } = this;
    const { password, passwordErrMsg } = this.state;
    return (
      <Modal title="输入账户密码">
        <div className={styles.userInput}>
          <Input
            value={password}
            errMsg={passwordErrMsg}
            onChange={(value) => {
              this.setState({
                password: value,
              });
            }}
            onBlur={checkAll.checkPassword}
          />
        </div>
        <div className={styles.button}>
          <button>确定</button>
        </div>
      </Modal>
    );
  }
}
