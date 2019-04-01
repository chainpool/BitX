import React ,{Component} from 'react';
import * as styles from './index.module.css';
import { connect } from 'react-redux';

class AccountList extends Component{
  render(){
    console.log(this.props)
    return <div className={styles.AccountList}>
      AccountList
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

