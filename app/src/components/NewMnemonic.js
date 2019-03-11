import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import './new-mnemonic.scss';
import { connect } from 'react-redux';
import { generateMnemonic } from '@store/actions';
import Button from '@material-ui/core/Button';

class NewMnemonic extends Component {
  componentDidMount() {
    this.props.genreateMnemonic();
  }

  render() {
    const { history } = this.props;

    return (
      <div className="new-mnemonic">
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton className="menu" color="inherit" aria-label="Menu">
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" color="inherit" align="center" className="grow">
                备份助记词
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <p>{this.props.mnemonic.join(' ')}</p>

        <div className="operation">
          <Button
            variant="contained"
            color="primary"
            className="button"
            onClick={() => history.push('/password')}>
            我已备份
          </Button>
        </div>
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
    genreateMnemonic: () => {
      dispatch(generateMnemonic());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMnemonic);
