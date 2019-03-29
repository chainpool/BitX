import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Mnemonic from './Mnemonic';
import PrivateKey from './PrivateKey';
import './index.scss';

class Import extends Component {
  state = {
    value: 0,
  };

  render() {
    const { history } = this.props;
    const { value } = this.state;

    return (
      <div className="import">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className="menu"
                color="inherit"
                aria-label="Menu"
                onClick={() => history.push('/')}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" color="inherit" align="center" className="grow">
                导入账户
              </Typography>
            </Toolbar>
          </AppBar>
        </div>

        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => this.setState({ value: newValue })}>
            <Tab label="导入助记词" />
            <Tab label="导入私钥" />
          </Tabs>
        </Paper>

        {value === 0 ? <Mnemonic /> : <PrivateKey />}
      </div>
    );
  }
}

export default Import;
