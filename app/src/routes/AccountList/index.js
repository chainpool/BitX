import React ,{Component} from 'react';
import './index.css';
import { connect } from 'react-redux';

class AccountList extends Component{
  render(){
    console.log(this.props)
    return <div className="AccountList">
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

