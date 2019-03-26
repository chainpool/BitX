import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import './send.scss';
import Button from '@material-ui/core/Button';

class Send extends Component {
  state = {
    address: '',
    amount: '',
    addOpReturn: false,
    hex: '',
    ascii: '',
  };

  render() {
    const { address, amount, hex, addOpReturn, ascii } = this.state;

    function hexToAscii(str) {
      if (!/^(0x)?[\da-fA-F]+$/.test(str)) {
        return '';
      }

      const hexString = str.startsWith('0x') ? str.substring(2) : str;
      if (hexString.length % 2 === 1) {
        return '';
      }

      let strOut = '';
      for (let x = 0; x < hexString.length; x += 2) {
        strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
      }
      return strOut;
    }

    return (
      <div>
        <TextField
          label="接收人地址"
          fullWidth
          value={address}
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          margin="normal"
        />

        <TextField
          label="转账数量"
          fullWidth
          value={amount}
          onChange={(event) => {
            this.setState({ amount: event.target.value });
          }}
          margin="normal"
        />

        <FormGroup row className="right">
          <FormControlLabel
            control={
              <Switch
                checked={this.state.addOpReturn}
                onChange={(event, newValue) => this.setState({ addOpReturn: newValue })}
                color="primary"
              />
            }
            label="添加OP_RETURN"
          />
        </FormGroup>

        {addOpReturn && (
          <section className="op-return">
            <TextField
              label="16进制Hex"
              multiline
              rowsMax="2"
              value={hex}
              fullWidth
              onChange={(event) =>
                this.setState({ hex: event.target.value, ascii: hexToAscii(event.target.value) })
              }
              margin="none"
            />

            <TextField disabled fullWidth label="文本ASCII" value={ascii} margin="normal" />
          </section>
        )}

        <section className="operation">
          <Button variant="contained" color="primary">
            确定
          </Button>
        </section>
      </div>
    );
  }
}

export default Send;
