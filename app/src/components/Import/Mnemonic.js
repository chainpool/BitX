import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Mnemonic extends Component {
  state = {
    value: '',
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <p>请安正确顺序输入您的助记词</p>
        <p>以空格键区分</p>

        <TextField
          fullWidth
          multiline
          rows="4"
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

export default Mnemonic;
