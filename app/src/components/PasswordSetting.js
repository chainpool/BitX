import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addAccount } from '@store/actions';
import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

class PasswordSetting extends Component {
  state = {
    name: '',
    password: '',
    repeatPassword: '',
  };

  componentDidMount() {
    console.log(this.props.mnemonic);
  }

  render() {
    return (
      <div className="new-mnemonic">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton className="menu" color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" color="inherit" align="center" className="grow">
                设置密码
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <h5>为你的钱包账户设置密码</h5>
        <TextField
          id="standard-name"
          label="昵称"
          margin="normal"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <TextField
          id="standard-name"
          label="密码"
          placeholder="密码至少包含8个字符"
          margin="normal"
          type="password"
          value={this.state.password}
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
        />
        <TextField
          error={this.state.password !== this.state.repeatPassword}
          id="standard-name"
          label="确认密码"
          placeholder="重复输入密码"
          margin="normal"
          type="password"
          value={this.state.repeatPassword}
          onChange={(event) => {
            this.setState({ repeatPassword: event.target.value });
          }}
        />

        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={() => {
            console.log('fuck world');
            this.props.addAccount(this.state.name, this.props.mnemonic, this.state.password);
          }}>
          确定
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mnemonic: state.newMnemonic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAccount: (name, mnemonic, password) => {
      const path = "m/0'/0/0";

      const seed = bip39.mnemonicToSeed(mnemonic.join(' '));
      const root = bip32.fromSeed(seed);
      debugger;
      const child1 = root.derivePath(path);
      console.log(child1);
      const result = bitcoin.payments.p2pkh({ pubkey: child1.publicKey });
      console.log(result);

      dispatch(addAccount({ name, address: '' }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PasswordSetting);
