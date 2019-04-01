import React ,{Component} from 'react';
import * as styles from './index.module.scss';
import { connect } from 'react-redux';

class AccountList extends Component{
  render(){
    console.log(this.props)
    return <div className={styles.AccountList}>
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

