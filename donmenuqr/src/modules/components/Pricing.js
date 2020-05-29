import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(4, 0, 4),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
    iconCheck:{
        color: '#88b710'
  }
}));

const tiers = [
{
    title: 'Básico',
    price: '80',
    description: [
        'Diseño básico', 
        'Realización código QR', 
        'Cartel informativo A3', 
        '9 vinilos adhesivos QR'
    ],
    buttonText: 'Ver ejemplo de menú',
    buttonVariant: 'contained',
    url: '/cartas/3Rllb9kJWoix85iGafmG/basic'
},
{
    title: 'Premium',
    subheader: 'Más popular',
    price: '110',
    description: [
      'Diseño EXCLUSIVO',
      'Multi-idioma',
      'Realización código QR',
      'Cartel Informativo A3',
      '9 vinilos QR sobre PVC',
      '20 vinilos adhesivos QR'
    ],
    buttonText: 'Ver ejemplo de menú',
    buttonVariant: 'contained',
    url: '/cartas/3Rllb9kJWoix85iGafmG/static'
  }
];

export default function Pricing() {
  const classes = useStyles();
  const history = useHistory();

  function handleClick(url) {
    history.push(url)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Precios
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Premium' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price}€
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      + IVA
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                        <Typography component="li" variant="subtitle1" align="center" key={line}>
                            <CheckCircleOutlineOutlinedIcon style={{fill: "#88b710"}}/> {line}
                        </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button 
                    onClick={() => handleClick(tier.url)}
                    fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h5" align="center" color="textPrimary" gutterBottom>
          Cuota de mantenimiento de 0,40€ día + IVA 
        </Typography>
        <Typography component="h5" align="center" color="textPrimary" gutterBottom>
          Hasta 4 cambios en el contenido de la carta GRATIS al año
        </Typography>
        <Grid item xs={12}>
              <Card>
                <CardHeader
                  title="SERVICIO ADICIONAL"
                  titleTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      60€
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      + IVA
                    </Typography>
                  </div>
                  <ul>
                    <Typography component="li" variant="subtitle1" align="center">
                        <CheckCircleOutlineOutlinedIcon style={{fill: "#88b710"}}/> 
                        1000 tarjetas 70x45mm con el código QR de tu carta
                    </Typography>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
      </Container>
    </React.Fragment>
  );
}