import React from "react";
import { Mixin } from "../../components";
import * as styles from "./ImportMnemonicOrSecret.module.scss";
import { Patterns } from "../../utils";
import { SetPassword } from "../Components";
import { connect } from "react-redux";
import dogecoin from "bitcore-lib-doge";

class ImportSecretKey extends Mixin {
  state = {
    userInput: "",
    userInputErrMsg: ""
  };

  checkAll = {
    checkUserInput: () => {
      const { userInput = [] } = this.state;
      const { network } = this.props;
      const err =
        Patterns.check("required")(userInput) ||
        Patterns.check("isValidPrivateKey")(userInput, network);
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
            <div className={styles.desc}>请输入您的钱包私钥</div>
            <div className={styles.generatewords}>
              <textarea
                value={userInput}
                onChange={e => {
                  const value = e.target.value;
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
                  changeStep(2);
                }
              }}
            >
              导入
            </button>
          </>
        )}
        {step === 2 && (
          <SetPassword {...this.props} privateKey={userInput.trim()} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    network: state.network
  };
};

export default connect(mapStateToProps)(ImportSecretKey);
