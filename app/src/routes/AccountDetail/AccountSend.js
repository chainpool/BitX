import React from 'react';
import { Mixin, Input, Modal } from '../../components';
import * as styles from './AccountSend.module.scss';
import { Patterns } from '../../utils';

export default class AccountSend extends Mixin {
  state = {
    address: '1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG',
    addressErrMsg: '',
    amount: '',
    amountErrMsg: '',
    addOpReturn: false,
    hex: '',
    hexErrMsg: '',
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
    const {
      address,
      addressErrMsg,
      amount,
      amountErrMsg,
      addOpReturn,
      hex,
      hexErrMsg,
    } = this.state;
    const { modal: { name } = {} } = this.props;
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
        <div className={styles.addreturn}>
          添加OP_RETURN
          {addOpReturn ? (
            <i
              onClick={() => {
                this.setState({
                  addOpReturn: !addOpReturn,
                });
              }}
              className="iconfont iconopen"
              style={{ color: '#F6C94A' }}
            />
          ) : (
            <i
              onClick={() => {
                this.setState({
                  addOpReturn: !addOpReturn,
                });
              }}
              className="iconfont iconclose"
              style={{ color: 'rgba(34,31,31,0.26)' }}
            />
          )}
        </div>
        {addOpReturn && (
          <div className={styles.returncontent}>
            <div className={styles.input}>
              <Input
                errMsg={hexErrMsg}
                label="16进制 Hex"
                value={hex}
                onBlur={checkAll.checkAddress}
                onChange={(value) => {
                  this.setState({
                    hex: value,
                  });
                }}
              />
            </div>
            <div className={styles.ASCII}>
              <div className={styles.label}>文本 ASCII</div>
              <div>1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG</div>
            </div>
          </div>
        )}

        <div className={styles.button}>
          <button
            onClick={() => {
              this.openModal({
                name: 'transfer',
              });
            }}>
            确定
          </button>
        </div>

        {name === 'transfer' && <Modal />}
      </div>
    );
  }
}
