import React from 'react';
import { connect } from 'react-redux';
import { Mixin, RouterGo } from '../../components';
import SelectModeGetAccount from './SelectModeGetAccount';
import * as styles from './index.module.scss';
import { PATH } from '../../constants';

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
    const { accounts = [] } = this.props;

    return (
      <div className={styles.AccountList}>
        <div className={styles.listtitle}>
          <div>账户列表</div>
          <div onClick={changeClose}>
            <i className="iconfont iconadd" />
          </div>
        </div>
        <ul>
          {accounts.map((item, index) => (
            <RouterGo key={index} Ele="li" go={{ pathname: PATH.accountdetail }}>
              <div className={styles.desc}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.amount}>
                  1.34567828<span>BTC</span>
                </div>
              </div>
              <div className={styles.address}>{item.address}</div>
            </RouterGo>
          ))}
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
