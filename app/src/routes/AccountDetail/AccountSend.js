import React from "react";
import { connect } from "react-redux";
import { Input, Mixin } from "../../components";
import { SignModal } from "../Components";
import * as styles from "./AccountSend.module.scss";
import { formatNumber, Patterns, bitJS } from "../../utils";
import { getAccountUtxos } from "../../store/actions";
import { enough } from "../../components/Detail/bitcoin";
import { broadcastTx } from "../../service";
import bitcoin from "bitcoinjs-lib";

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
    fee: 0.00001, // 默认值为1000 Satoshi
    feeErrMsg: ""
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
        err = this.checkAll.checkAmountAndFee();
      } else {
        this.setState({
          amountErrMsg: err
        });
      }
      return err;
    },
    checkFee: () => {
      const { fee } = this.state;
      let err =
        Patterns.check("required")(fee) ||
        Patterns.check("smallerOrEqual")(0, fee, "数量必须大于或等于0");
      if (!err) {
        err = this.checkAll.checkAmountAndFee();
      } else {
        this.setState({
          feeErrMsg: err
        });
      }
      return err;
    },
    checkAmountAndFee: () => {
      const { fee, amount, utxos } = this.state;
      const BTCAmount = Number(formatNumber.toBtcPrecision(amount, 8, true));
      const feeInSatoshi = Number(formatNumber.toBtcPrecision(fee, 8, true));
      if (!enough(utxos, BTCAmount, feeInSatoshi)) {
        const errMsg = "数量不足";
        this.setState({
          feeErrMsg: errMsg,
          amountErrMsg: errMsg
        });
        return errMsg;
      }
      this.setState({
        feeErrMsg: "",
        amountErrMsg: ""
      });
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
      return ["checkAddress", "checkAmount", "checkFee", "checkHex"].every(
        item => !this.checkAll[item]()
      );
    }
  };

  startInit = () => {
    const { getAccountUtxos, currentAccount } = this.props;
    getAccountUtxos(currentAccount.address).then(res =>
      this.setState({
        utxos: res
      })
    );
  };

  constructTx(encryptedKey, password) {
    const { address, amount, hex, utxos, fee } = this.state;
    const { currentAccount } = this.props;
    const BTCAmount = Number(formatNumber.toBtcPrecision(amount, 8, true));
    const feeInSatoshi = Number(formatNumber.toBtcPrecision(fee, 8, true));

    return bitJS.sign(
      utxos,
      currentAccount.address,
      address,
      BTCAmount,
      feeInSatoshi,
      hex,
      encryptedKey,
      password,
      bitcoin.networks.testnet
    );
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
      fee,
      feeErrMsg
    } = this.state;

    const hexToAscii = str => {
      if (!/^(0x)?[\da-fA-F]+$/.test(str)) {
        return "";
      }
      const hexString = str.startsWith("0x") ? str.substring(2) : str;
      if (hexString.length % 2 === 1) {
        return "";
      }

      let strOut = "";
      for (let x = 0; x < hexString.length; x += 2) {
        strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
      }
      return strOut;
    };

    const ASCII = hexToAscii(hex);
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
          <Input
            errMsg={feeErrMsg}
            label="交易手续费"
            value={fee}
            suffix={"BTC"}
            onBlur={checkAll.checkFee}
            onChange={value => {
              this.setState({
                fee: value
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
                this.openModal({
                  name: "transfer",
                  data: {
                    callback: async (encryptedKey, password) => {
                      const tx = this.constructTx(encryptedKey, password);
                      if (tx && tx.message) {
                        throw Error(tx.message);
                      } else {
                        const res = await broadcastTx(tx);
                        if (res && res.tx) {
                          return res.tx;
                        }
                      }
                    }
                  }
                });
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
    getAccountUtxos: address => dispatch(getAccountUtxos(address))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(AccountSend);
