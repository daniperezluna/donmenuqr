import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import qr from '../../assets/qr.png';
import manoMenu from '../../assets/recursoMano.png'

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  imageMenu: {
    height: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '38vh'
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Como funciona
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <img
                  src={qr}
                  alt="qr"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Coge tu móvil, abre la cámara y captura el QR.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <img
                  src={manoMenu}
                  alt="menu"
                  className={classes.imageMenu}
                />
                <Typography variant="h5" align="center">
                  Al momento tendrás el menú en la palma de tu mano
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
