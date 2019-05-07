import React, { Component } from "react";

import * as styles from "./index.module.scss";
import classnames from "classnames";

export class Input extends Component {
  render() {
    const {
      label,
      errMsg,
      value,
      onChange,
      onBlur,
      prefix,
      suffix,
      placeholder,
      isPassword,
      isTextArea,
      className,
      ...rest
    } = this.props;
    const Ele = isTextArea ? "textarea" : "input";
    return (
      <div className={styles.container}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.content}>
          {prefix && <div className={styles.prefix}>{prefix}</div>}

          <Ele
            className={classnames(styles.input, className)}
            type={isPassword ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            onChange={e => {
              onChange(e.target.value.trim());
            }}
            onBlur={onBlur}
            {...rest}
          />
          {suffix && <div className={styles.suffix}>{suffix}</div>}
        </div>
        {errMsg && <div className={styles.errMsg}>{errMsg}</div>}
      </div>
    );
  }
}
