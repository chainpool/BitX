import React from 'react';
import { connect } from 'react-redux';
import { Mixin } from '../../components';
import AccountInfo from './AccountInfo';
import AccountAccept from './AccountAccept';
import * as styles from './index.module.scss';

class AccountDetail extends Mixin {
  pageTitle = 'Alice';
  state = {
    activeIndex: 1,
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <div className={styles.AccountDetail}>
        <AccountInfo {...this.props} />
        <div className={styles.content}>
          <ul className={styles.selectmode}>
            {['接收', '发送'].map((item, index) => (
              <li
                key={index}
                className={activeIndex === index ? styles.active : null}
                onClick={() => {
                  this.setState({
                    activeIndex: index,
                  });
                }}>
                {item}
              </li>
            ))}
          </ul>
          {activeIndex === 1 && <AccountAccept {...this.props} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(AccountDetail);
