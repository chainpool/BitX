import React, { Component } from "react";
import * as styles from "./InputPassword.module.scss";
import classnames from "classnames";
import { bitJS, Patterns } from "../../utils";
import { Input } from "../../components";

import bip38 from "bip38";

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
    const { privateKey } = bip38.decrypt(encryptedKey, password, () => {}, {
      N: 128,
      r: 8,
      p: 8
    });
    this.props.setPrivateKey(privateKey);
  }
  render() {
    const { password, passwordErrMsg } = this.state;
    return (
      <div className={classnames(this.props.className, styles.input_password)}>
        <div>
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
        </div>
        <button
          className={styles.confirm}
          onClick={() => {
            if (!this.checkPassword()) {
              this.exportPrivateKey();
              this.props.handleStepChange(3);
            }
          }}
        >
          确定
        </button>
      </div>
    );
  }
}
