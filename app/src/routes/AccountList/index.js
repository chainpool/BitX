import React from 'react';
import { connect } from 'react-redux';
import { Mixin, RouterGo } from '../../components';
import SelectModeGetAccount from './SelectModeGetAccount';
import * as styles from './index.module.scss';
import { PATH } from '../../constants';
import { getAccountBalance } from '../../store/actions';

class AccountList extends Mixin {
  pageTitle = 'Bitx';
  constructor(props) {
    super(props);
    const { accounts = [] } = props;
    this.state = {
      close: !!accounts.length,
    };
  }

  startInit = () => {
    const { getAccountBalance } = this.props;
    getAccountBalance('n3Xy4TCJoHpmma3sSpMY8xGcRX3u6NkMae').then((res) => {
      console.log(res, '----');
    });
  };

  changeClose = () => {
    this.setState((prevState) => ({
      close: !prevState.close,
    }));
  };

  render() {
    const { changeClose } = this;
    const { close } = this.state;
    const { accounts = [] } = this.props;
    console.log(accounts, '-----accounts');

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

const mapDispatchToProps = (dispatch) => {
  return {
    getAccountBalance: (addr) => dispatch(getAccountBalance(addr)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountList);
