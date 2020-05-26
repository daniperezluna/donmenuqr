import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import { Typography } from '@material-ui/core';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import logo from '../../assets/logoQR.png'

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <img src={logo} />
          <div className={classes.right}>
            <PermPhoneMsgIcon />
            <Typography
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
            >
              {'952 724 148'}
            </Typography>
            <Typography
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
            >
              {'640 574 423'}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
