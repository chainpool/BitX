import React, { useState } from "react";
import * as styles from "./InputPassword.module.scss";
import classnames from "classnames";
import { bitJS, Patterns } from "../../utils";
import { Input } from "../../components";

export default function InputPassword(props) {
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const checkPassword = function() {
    const { currentAccount: { encryptedKey } = {} } = props;
    let err =
      Patterns.check("required")(password) ||
      bitJS.isValidPassword(encryptedKey, password);
    setErrMsg(err);
    return err;
  };

  return (
    <div
      className={classnames(props.className, styles.input_password)}
      onClick={e => e.stopPropagation()}
    >
      <div className={styles.top}>
        <span className={styles.title}>输入账户密码</span>
        <i
          className={classnames("iconfont iconClose", styles.close)}
          onClick={props.onClose}
        />
      </div>
      <Input
        className={styles.input}
        isPassword
        value={password}
        errMsg={errMsg}
        onChange={value => {
          setPassword(value);
          setErrMsg("");
        }}
        onBlur={checkPassword}
      />
      <button
        className={styles.confirm}
        onClick={e => {
          e.stopPropagation();
          if (!checkPassword()) {
            props.passwordCallback(password);
          }
        }}
      >
        确定
      </button>
    </div>
  );
}
