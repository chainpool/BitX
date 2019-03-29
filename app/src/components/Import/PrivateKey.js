import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PrivateKey extends Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <p>请输入您的钱包私钥</p>

        <TextField
          fullWidth
          value={value}
          onChange={(event) => this.setState({ value: event.target.value })}
          margin="normal"
          variant="outlined"
        />

        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          确定
        </Button>
      </div>
    );
  }
}

export default PrivateKey;
