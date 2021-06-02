import React from "react";
import { Input, Mixin, Modal, RouterGo } from "../../components";
import { bitJS, isFunction, isString, Patterns } from "../../utils";
import * as styles from "./SignModal.module.scss";

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
        bitJS.isValidPassword(encryptedKey, password);
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
      currentAccount: { encryptedKey, network } = {}
    } = this.props;
    const isTestnet = network !== "mainnet";

    return (
      <Modal title={status ? "交易已广播" : "输入账户密码"}>
        {status ? (
          <div className={styles.success}>
            <i className="iconfont iconsuccess" />
            <div className={styles.button}>
              <RouterGo
                isOutSide
                go={{
                  pathname: `https://chain.so/tx/${
                    isTestnet ? "DOGETEST" : "DOGE"
                  }/${hash}/`
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
                    if (isFunction(callback)) {
                      try {
                        const res = await callback(encryptedKey, password);

                        if (res) {
                          this.setState({
                            status: true,
                            hash: res.hash
                          });
                        }
                      } catch (err) {
                        console.log(err);
                        const errMsg = isString(err)
                          ? err
                          : err.message && isString(err.message)
                          ? err.message
                          : err.message &&
                            err.message.error &&
                            isString(err.message.error)
                          ? err.message.error
                          : "交易广播失败";
                        this.setState({
                          passwordErrMsg: errMsg
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
