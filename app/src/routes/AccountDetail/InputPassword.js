import React, { Component } from "react";
import * as styles from "./InputPassword.module.scss";
import classnames from "classnames";
import { bitJS, Patterns } from "../../utils";
import { Input } from "../../components";
import { bitX } from "../../utils/bitX";

export default class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordErrMsg: ""
    };
  }
  checkPassword() {
    const { password } = this.state;
    const { currentAccount: { encryptedKey } = {} } = this.props;
    let err =
      Patterns.check("required")(password) ||
      bitJS.isValidPassword(encryptedKey, password);
    this.setState({
      passwordErrMsg: err
    });
    return err;
  }
  exportPrivateKey() {
    const { password } = this.state;
    const { currentAccount: { encryptedKey } = {} } = this.props;
    const { privateKey } = bitX.decryptPair(encryptedKey, password);
    this.props.setPrivateKey(privateKey);
  }
  render() {
    const { password, passwordErrMsg } = this.state;
    return (
      <div className={classnames(this.props.className, styles.input_password)}>
        <div className={styles.top}>
          <span className={styles.title}>输入账户密码</span>
          <i
            className={classnames("iconfont iconClose", styles.close)}
            onClick={() => {
              this.props.onClose();
            }}
          />
        </div>
        <Input
          className={styles.input}
          isPassword
          value={password}
          errMsg={passwordErrMsg}
          onChange={value => {
            this.setState({
              passwordErrMsg: "",
              password: value
            });
          }}
          onBlur={() => {
            this.checkPassword();
          }}
        />
        <button
          className={styles.confirm}
          onClick={() => {
            if (!this.checkPassword()) {
              this.exportPrivateKey();
            }
          }}
        >
          确定
        </button>
      </div>
    );
  }
}
