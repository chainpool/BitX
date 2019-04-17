import React from "react";
import { Mixin } from "../../components";
import * as styles from "./ImportMnemonicOrSecret.module.scss";
import { Patterns } from "../../utils";
import { SetPassword } from "../Components";

export default class ImportMnemonic extends Mixin {
  state = {
    userInput: "",
    userInputErrMsg: ""
  };

  checkAll = {
    checkUserInput: () => {
      const { userInput } = this.state;
      const err =
        Patterns.check("required")(userInput) ||
        Patterns.check("isValidMnemonic")(userInput.trim());
      this.setState({
        userInputErrMsg: err
      });
      return err;
    },
    confirm: () => {
      return ["checkUserInput"].every(item => !this.checkAll[item]());
    }
  };

  render() {
    const { checkAll } = this;
    const { userInput, userInputErrMsg } = this.state;
    const { changeStep, step } = this.props;
    return (
      <div className={styles.ImportMnemonic}>
        {step === 1 && (
          <>
            <div className={styles.desc}>
              请按正确顺序输入您的助记词
              <br />
              以空格键区分
            </div>
            <div className={styles.generatewords}>
              <textarea
                value={userInput}
                onChange={e => {
                  const value = e.target.value.replace(/\s+/g, " ");
                  this.setState({
                    userInputErrMsg: "",
                    userInput: value
                  });
                }}
              />
            </div>
            {userInputErrMsg && (
              <div className={styles.errwarn}>{userInputErrMsg}</div>
            )}

            <button
              onClick={() => {
                if (checkAll.confirm()) {
                  console.log(userInput.trim());
                  changeStep(2);
                }
              }}
            >
              导入
            </button>
          </>
        )}
        {step === 2 && (
          <SetPassword {...this.props} mnemonic={userInput.trim()} />
        )}
      </div>
    );
  }
}
