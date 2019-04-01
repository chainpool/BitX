import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Mixin } from '../../components';
import * as styles from './index.module.scss';

class CreateAccount extends Mixin {
  pageTitle = '备份助记词';
  render() {
    return <div className={styles.CreateAccount}>hahahhaha</div>;
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
