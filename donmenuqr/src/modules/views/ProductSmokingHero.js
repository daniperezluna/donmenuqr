import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
    marginBottom: '1.5vh',
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          ¿Tienes alguna duda? ¿Necesitas ayuda?
        </Typography>
      </Button>
      <Typography variant="h4" component="span">
        952 724 148
      </Typography>
      <Typography variant="h4" component="span">
        640 574 423
      </Typography>
      <Typography variant="subtitle1" className={classes.link}>
        Estamos aquí para ayudarte. ¡Llámanos!
      </Typography>
      <Typography variant="h5" component="span">
        info@donmenuqr.com | comercial@donmenuqr.com
      </Typography>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
