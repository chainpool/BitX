import React ,{Component} from 'react';
import { connect } from 'react-redux';
import SelectModeGetAccount from './SelectModeGetAccount'
import * as styles from './index.module.scss';


class AccountList extends Component{
  render(){
    const {accounts=[]}=this.props

    return <div className={styles.AccountList}>
      {
        accounts.length?(
          <>
            <div className={styles.listtitle}>
              <div>账户列表</div>
              <div>+</div>
            </div>
            <ul>
              <li>
                <div className={styles.desc}>
                  <div className={styles.name}>Alice</div>
                  <div className={styles.amount}>1.34567828<span>BTC</span></div>
                </div>
                <div className={styles.address}>1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG</div>
              </li>
            </ul>
          </>
        ):<SelectModeGetAccount {...this.props} />
      }


    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountList);

