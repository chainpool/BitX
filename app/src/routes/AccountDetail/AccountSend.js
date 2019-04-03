import React from 'react';
import { connect } from 'react-redux';
import { Mixin, Input } from '../../components';
import { SignModal } from '../Components';
import * as styles from './AccountSend.module.scss';
import { Patterns, bitJS } from '../../utils';
import { getAccountUtxos } from '../../store/actions';
import { enough } from '../../components/Detail/bitcoin';
import compose from '../../components/Detail/bitcoin';

class AccountSend extends Mixin {
  state = {
    utxos: [],
    address: '',
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
      const {
        currentAccount: { balanceShow },
      } = this.props;
      const err =
        Patterns.check('required')(amount) || Patterns.check('smaller')(amount, balanceShow);
      this.setState({
        amountErrMsg: err,
      });
      return err;
    },
    confirm: () => {
      return ['checkAddress', 'checkAmount'].every((item) => !this.checkAll[item]());
    },
  };

  startInit = () => {
    const { getAccountUtxos, currentAccount } = this.props;
    getAccountUtxos(currentAccount.address).then((res) =>
      this.setState({
        utxos: res,
      }),
    );
  };

  constructTx() {
    const { address, amount, hex, utxos } = this.state;
    const { currentAccount } = this.props;

    if (!enough(utxos, parseInt(amount), 1000)) {
      // TODO: 用户余额不够，需要提醒用户
      return;
    }

    const result = compose(
      utxos,
      currentAccount.address,
      address,
      parseInt(amount),
      1000,
      hex,
    );
    console.log(result);
    return result;
  }

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
    const ASCII = bitJS.hexToAscii(hex);
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
              <div>{ASCII}</div>
            </div>
          </div>
        )}

        <div className={styles.button}>
          <button
            onClick={() => {
              if (checkAll.confirm()) {
                try {
                  const tx = this.constructTx();
                  this.openModal({
                    name: 'transfer',
                    data: {
                      callback: () => {
                        console.log(tx);
                      },
                    },
                  });
                } catch (err) {
                  console.log(err);
                }
              }
            }}>
            确定
          </button>
        </div>

        {name === 'transfer' && <SignModal {...this.props} />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountUtxos: (address) => dispatch(getAccountUtxos(address)),
  };
};

export default connect(
  undefined,
  mapDispatchToProps,
)(AccountSend);
