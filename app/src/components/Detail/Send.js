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
  };

  render() {
    const { address, amount, hex, addOpReturn } = this.state;

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
              onChange={(event) => this.setState({ hex: event.target.value })}
              margin="none"
            />

            <TextField disabled fullWidth label="文本ASCII" value={hex} margin="normal" />
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
