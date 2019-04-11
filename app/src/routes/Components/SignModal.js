import React from "react";
import { Mixin, Input, Modal, RouterGo } from "../../components";
import { isFunction, Patterns, bitJS } from "../../utils";
import * as styles from "./SignModal.module.scss";
import bitcoin from "bitcoinjs-lib";

export default class SignModal extends Mixin {
  state = {
    password: "",
    passwordErrMsg: "",
    status: false,
    hash: ""
  };

  checkAll = {
    checkPassword: () => {
      const { password } = this.state;
      const { currentAccount: { encryptedKey } = {} } = this.props;

      let err =
        Patterns.check("required")(password) ||
        Patterns.check("isValidPassword")(encryptedKey, password);
      this.setState({
        passwordErrMsg: err
      });
      return err;
    },
    confirm: () => {
      return ["checkPassword"].every(item => !this.checkAll[item]());
    }
  };

  render() {
    const { checkAll } = this;
    const { password, passwordErrMsg, status, hash } = this.state;
    const {
      modal: { data: { callback } = {} } = {},
      currentAccount: { encryptedKey } = {}
    } = this.props;

    return (
      <Modal title={status ? "交易已广播" : "输入账户密码"}>
        {status ? (
          <div className={styles.success}>
            <i className="iconfont iconsuccess" />
            <div className={styles.button}>
              <RouterGo
                isOutSide
                go={{
                  pathname: `https://live.blockcypher.com/btc-testnet/tx/${hash}/`
                }}
              >
                <button onClick={() => {}}>查看交易</button>
              </RouterGo>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.userInput}>
              <Input
                isPassword
                value={password}
                errMsg={passwordErrMsg}
                onChange={value => {
                  this.setState({
                    passwordErrMsg: "",
                    password: value
                  });
                }}
                onBlur={checkAll.checkPassword}
              />
            </div>
            <div className={styles.button}>
              <button
                onClick={async () => {
                  if (checkAll.confirm()) {
                    const result = bitJS.decrypt(encryptedKey, password);
                    const pair = bitcoin.ECPair.fromPrivateKey(
                      result.privateKey,
                      {
                        compressed: result.compressed,
                        network: bitcoin.networks.testnet
                      }
                    );

                    if (isFunction(callback)) {
                      try {
                        const res = await callback(pair);
                        console.log(res);
                        if (res) {
                          this.setState({
                            status: true,
                            hash: res
                          });
                        }
                      } catch (err) {
                        console.log(err, "-----signmodal,err");
                        this.setState({
                          passwordErrMsg: err.message.error
                            ? err.message.error
                            : err.message.toString()
                        });
                      }
                    }
                  }
                }}
              >
                确定
              </button>
            </div>
          </>
        )}
      </Modal>
    );
  }
}
