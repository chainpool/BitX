import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexGrow: 1,
    height: '100%',
  },
  grow: {
    flexGrow: 1,
  },
};

function ButtonAppBar(props) {
  const { classes, history } = props;

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push('/new')}>
        创建账户
      </Button>

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push('/import')}>
        导入账户
      </Button>
    </div>
  );
}

export default withStyles(styles)(ButtonAppBar);
