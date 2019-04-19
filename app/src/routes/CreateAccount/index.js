import React from "react";
import { connect } from "react-redux";
import { Mixin } from "../../components";
import { bitJS } from "../../utils";
import KnowAbout from "./KnowAbout";
import SaveMnemonic from "./SaveMnemonic";
import CheckMnemonic from "./CheckMnemonic";
import { SetPassword } from "../Components";
import * as styles from "./index.module.scss";

class CreateAccount extends Mixin {
  state = {
    step: 1,
    mnemonic: bitJS.generateMnemonic()
  };

  changeStep = step => {
    this.changeState({
      step
    });
  };
  render() {
    const { step, mnemonic } = this.state;
    const props = {
      ...this.props,
      mnemonic,
      changeStep: this.changeStep
    };
    return (
      <div className={styles.CreateAccount}>
        {step === 1 && <KnowAbout {...props} />}
        {step === 2 && <SaveMnemonic {...props} />}
        {step === 3 && <CheckMnemonic {...props} />}
        {step === 4 && <SetPassword {...props} />}
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
)(CreateAccount);
