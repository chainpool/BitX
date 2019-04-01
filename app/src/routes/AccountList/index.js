import React from 'react';
import { connect } from 'react-redux';
import { Mixin } from '../../components';
import SelectModeGetAccount from './SelectModeGetAccount';
import * as styles from './index.module.scss';

class AccountList extends Mixin {
  pageTitle = 'Bitx';
  constructor(props) {
    super(props);
    const { accounts = [] } = props;
    this.state = {
      close: !!accounts.length,
    };
  }

  startInit = () => {};

  changeClose = () => {
    this.setState((prevState) => ({
      close: !prevState.close,
    }));
  };

  render() {
    const { changeClose } = this;
    const { close } = this.state;

    return (
      <div className={styles.AccountList}>
        <div className={styles.listtitle}>
          <div>账户列表</div>
          <div onClick={changeClose}>
            <i className="iconfont iconadd" />
          </div>
        </div>
        <ul>
          <li>
            <div className={styles.desc}>
              <div className={styles.name}>Alice</div>
              <div className={styles.amount}>
                1.34567828<span>BTC</span>
              </div>
            </div>
            <div className={styles.address}>1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG</div>
          </li>
        </ul>
        {close ? null : <SelectModeGetAccount {...this.props} changeClose={changeClose} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(AccountList);
