import React, { Component } from "react";
import { connect } from "react-redux";
import { Mixin } from "../../components";
import ImportMnemonic from "./ImportMnemonic";
import ImportSecretKey from "./ImportSecretKey";
import * as styles from "./index.module.scss";

class ImportAccount extends Mixin {
  pageTitle = "导入账户";
  state = {
    step: 1,
    activeIndex: 0
  };

  changeStep = step => {
    this.setState({
      step
    });
  };

  render() {
    const { step, activeIndex } = this.state;
    const props = {
      step,
      changeStep: this.changeStep,
      ...this.props
    };
    return (
      <div className={styles.ImportAccount}>
        {step === 1 && (
          <ul className={styles.selectmode}>
            {["导入助记词", "导入私钥"].map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? styles.active : null}
                onClick={() => {
                  this.setState({
                    step: 1,
                    activeIndex: index
                  });
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {activeIndex === 0 && <ImportMnemonic {...props} />}
        {activeIndex === 1 && <ImportSecretKey {...props} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImportAccount);
