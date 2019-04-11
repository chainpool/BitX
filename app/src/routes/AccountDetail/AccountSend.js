import React from "react";
import { connect } from "react-redux";
import { Input, Mixin } from "../../components";
import { SignModal } from "../Components";
import * as styles from "./AccountSend.module.scss";
import { bitJS, formatNumber, Patterns } from "../../utils";
import { getAccountUtxos, getFeeRate } from "../../store/actions";
import { compose, enough } from "../../components/Detail/bitcoin";
import { broadcastTx } from "../../service";

/**
 * TODO: 程序开始时获取当前比特币链上的平均交易fee
 * 测试网API: https://api.blockcypher.com/v1/btc/test3
 * 主网API: https://api.blockcypher.com/v1/btc/main
 */

class AccountSend extends Mixin {
  state = {
    utxos: [],
    address: "",
    addressErrMsg: "",
    amount: "",
    amountErrMsg: "",
    addOpReturn: false,
    hex: "",
    hexErrMsg: "",
    feeRate: ""
  };

  checkAll = {
    checkAddress: () => {
      const { address } = this.state;
      const err =
        Patterns.check("required")(address) ||
        Patterns.check("isBTCAddress")(address);
      this.setState({
        addressErrMsg: err
      });
      return err;
    },
    checkAmount: () => {
      const { amount } = this.state;
      let err =
        Patterns.check("required")(amount) ||
        Patterns.check("smallerOrEqual")(0, amount, "数量必须大于或等于0");
      if (!err) {
        try {
          this.constructTx();
        } catch (error) {
          err = error.message;
        }
      }
      this.setState({
        amountErrMsg: err
      });
      return err;
    },
    checkHex: () => {
      const { hex, addOpReturn } = this.state;
      const err = addOpReturn ? Patterns.check("required")(hex) : "";
      this.setState({
        hexErrMsg: err
      });
      return err;
    },
    confirm: () => {
      return ["checkAddress", "checkAmount", "checkHex"].every(
        item => !this.checkAll[item]()
      );
    }
  };

  startInit = () => {
    const { getAccountUtxos, getFeeRate, currentAccount } = this.props;
    getAccountUtxos(currentAccount.address).then(res =>
      this.setState({
        utxos: res
      })
    );

    getFeeRate().then(res => {
      this.setState({
        feeRate: Math.ceil(res.medium_fee_per_kb / 1024)
      });
    });
  };

  constructTx(ecpair) {
    const { address, amount, hex, utxos, feeRate } = this.state;
    const { currentAccount } = this.props;
    const BTCAmount = Number(formatNumber.toBtcPrecision(amount, 8, true));

    if (
      !enough(utxos, currentAccount.address, address, BTCAmount, feeRate, hex)
    ) {
      throw Error("数量不足");
    }

    if (ecpair) {
      const result = compose(
        utxos,
        currentAccount.address,
        address,
        BTCAmount,
        feeRate,
        hex,
        ecpair
      );
      return result;
    }
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
      hexErrMsg
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
            onChange={value => {
              this.setState({
                address: value
              });
            }}
          />
          <Input
            errMsg={amountErrMsg}
            label="转账数量"
            value={amount}
            suffix={"BTC"}
            onBlur={checkAll.checkAmount}
            onChange={value => {
              this.setState({
                amount: value
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
                  addOpReturn: !addOpReturn
                });
              }}
              className="iconfont iconopen"
              style={{ color: "#F6C94A" }}
            />
          ) : (
            <i
              onClick={() => {
                this.setState({
                  addOpReturn: !addOpReturn
                });
              }}
              className="iconfont iconclose"
              style={{ color: "rgba(34,31,31,0.26)" }}
            />
          )}
        </div>
        {addOpReturn && (
          <div className={styles.returncontent}>
            <div className={styles.input}>
              <Input
                rows={2}
                isTextArea
                errMsg={hexErrMsg}
                label="16进制 Hex"
                value={hex}
                onBlur={checkAll.checkHex}
                onChange={value => {
                  this.setState({
                    hex: value
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
                  this.openModal({
                    name: "transfer",
                    data: {
                      callback: async ecpair => {
                        const tx = this.constructTx(ecpair);
                        const res = await broadcastTx(tx);
                        if (res && res.tx && res.tx.hash) {
                          return res.tx.hash;
                        }
                      }
                    }
                  });
                } catch (err) {
                  console.log(err);
                }
              }
            }}
          >
            确定
          </button>
        </div>

        {name === "transfer" && <SignModal {...this.props} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAccountUtxos: address => dispatch(getAccountUtxos(address)),
    getFeeRate: () => dispatch(getFeeRate())
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AccountSend);
