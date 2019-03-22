import { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
  componentDidMount() {
    const { params: { address } = {} } = this.props.match;

    console.log('aa', address);
  }

  render() {
    console.log(this.props);
    const { params: { address } = {} } = this.props.match;

    return address;
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(Detail);
