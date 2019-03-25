import { Component } from 'react';
import { connect } from 'react-redux';
import { setBalance } from '@store/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './index.scss';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Receive from './Receive';

class Detail extends Component {
  state = { value: 1 };

  componentDidMount() {
    const { getBalance } = this.props;
    getBalance();
  }

  render() {
    const { params: { address } = {} } = this.props.match;
    const { accounts, balances } = this.props;
    const balance = balances.find((balance) => balance.address === address) || {};
    const account = (accounts || []).find((account) => account.address === address) || {};
    const { value } = this.state;

    return (
      <div className="detail">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton className="menu" color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" color="inherit" align="center" className="grow">
                {account.name}
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <section className="balance">
          <h4 align="center">{balance.balance}BTC</h4>
          <p align="center">{balance.address}</p>
        </section>

        <Paper square>
          <Tabs
            value={value}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => this.setState({ value: newValue })}>
            <Tab label="发送" />
            <Tab label="接收" />
          </Tabs>

          {value === 1 && <Receive address={address} />}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    balances: state.balances,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { params: { address } = {} } = ownProps.match;

  return {
    getBalance: () => dispatch(setBalance(address)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
