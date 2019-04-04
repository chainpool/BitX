import React from 'react';
import { Mixin, Input, Modal } from '../../components';
import { isFunction, Patterns } from '../../utils';
import * as styles from './SignModal.module.scss';

export default class SignModal extends Mixin {
  state = {
    password: '',
    passwordErrMsg: '',
    status: false,
  };

  checkAll = {
    checkPassword: () => {
      const { password } = this.state;
      const { currentAccount: { encryptedKey } = {} } = this.props;

      let err =
        Patterns.check('required')(password) ||
        Patterns.check('isValidPassword')(encryptedKey, password);
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
    const { password, passwordErrMsg, status } = this.state;
    const { modal: { data: { callback } = {} } = {} } = this.props;
    return (
      <Modal title={status ? '交易已广播' : '输入账户密码'}>
        {status ? (
          <div className={styles.success}>
            <i className="iconfont iconsuccess" />
            <div className={styles.button}>
              <button onClick={() => {}}>查看交易</button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.userInput}>
              <Input
                isPassword
                value={password}
                errMsg={passwordErrMsg}
                onChange={(value) => {
                  this.setState({
                    passwordErrMsg: '',
                    password: value,
                  });
                }}
                onBlur={checkAll.checkPassword}
              />
            </div>
            <div className={styles.button}>
              <button
                onClick={() => {
                  if (checkAll.confirm()) {
                    if (isFunction(callback)) {
                      callback();
                    }
                  }
                }}>
                确定
              </button>
            </div>
          </>
        )}
      </Modal>
    );
  }
}
