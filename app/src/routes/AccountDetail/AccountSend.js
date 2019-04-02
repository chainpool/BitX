import React from 'react';
import { Mixin, Input } from '../../components';
import * as styles from './AccountSend.module.scss';
import { Patterns } from '../../utils';

export default class AccountSend extends Mixin {
  state = {
    address: '1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG',
    addressErrMsg: '',
    amount: '',
    amountErrMsg: '',
  };

  checkAll = {
    checkAddress: () => {
      const { address } = this.state;
      const err = Patterns.check('required')(address);
      this.setState({
        addressErrMsg: err,
      });
      return err;
    },
    checkAmount: () => {
      const { amount } = this.state;
      const err = Patterns.check('required')(amount);
      this.setState({
        amountErrMsg: err,
      });
      return err;
    },
    confirm: () => {
      return ['checkAddress', 'checkAmount'].every((item) => !this.checkAll[item]());
    },
  };

  startInit = () => {};

  render() {
    const { checkAll } = this;
    const { address, addressErrMsg, amount, amountErrMsg } = this.state;
    return (
      <div className={styles.AccountSend}>
        <div className={styles.userInput}>
          <Input
            errMsg={addressErrMsg}
            label="接收人地址"
            value={address}
            onBlur={checkAll.checkAddress}
            onChange={(value) => {
              this.setState({
                address: value,
              });
            }}
          />
          <Input
            errMsg={amountErrMsg}
            label="转账数量"
            value={amount}
            suffix={'BTC'}
            onBlur={checkAll.checkAmount}
            onChange={(value) => {
              this.setState({
                amount: value,
              });
            }}
          />
        </div>
      </div>
    );
  }
}
