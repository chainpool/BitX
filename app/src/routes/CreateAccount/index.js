import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mixin } from '../../components';
import KnowAbout from './KnowAbout';
import SaveMnemonic from './SaveMnemonic';
import * as styles from './index.module.scss';

class CreateAccount extends Mixin {
  state = {
    step: 1,
    mnemonic: new Array(12).fill().map((item, index) => `alice${index}`),
  };

  changeStep = (step) => {
    this.setState({
      step,
    });
  };
  render() {
    const { changeStep } = this;
    const { step, mnemonic } = this.state;
    const props = {
      ...this.props,
      mnemonic,
      changeStep,
    };
    return (
      <div className={styles.CreateAccount}>
        {step === 1 && <KnowAbout {...props} />}
        {step === 2 && <SaveMnemonic {...props} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateAccount);
