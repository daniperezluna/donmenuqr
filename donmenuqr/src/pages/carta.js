import React, { Component } from 'react';
import logo from '../assets/YERBAGUENA.png'
import crustaceo from '../assets/crustaceos.png'
import huevos from '../assets/huevos.png'
import gluten from '../assets/gluten.png'
import '../menu.css'

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundImage: 'url(https://www.donmenuqr.com/assets/fondoYerba.jpg)',
        backgroundSize: 'contain',
        backgroundPositionX: 'center',
        position: 'fixed'
    },
    header: {
        flexGrow: 0,
        height: '16vh',
        minHeight: '16vh',
        marginTop: '1vh'
    },
    Card: {
        width: '100%',
        margin: 'auto',
        backgroundColor: 'transparent'
    },
    Media: {
        height: '15vh',
        width: '30vh',
        display: 'inline-flex',
        backgroundSize: 'contain'
    },
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    paperSeparator: {
        maxWidth: 500,
        margin: '3vh auto 0 auto'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    items:{
        margin: '10px 0'
    },
    fondo: {
        padding: '1vh',
        overflow: 'auto'
    },
    imgFondo: {
        backgroundImage: 'url(https://www.donmenuqr.com/assets/fondoYerba.jpg)',
        backgroundSize: 'contain',
        backgroundPositionX: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '100%'
    }
})

class carta extends Component {

	render() {
		const { classes } = this.props;		
		return (
            <div className={classes.container}>
                <header className={classes.header}>
                    <Grid item xs={12} >
                        <Card className={classes.Card}>
                            <CardMedia
                                className={classes.Media}
                                image={logo}
                            />
                        </Card>
                    </Grid>
                </header>
            <div className={classes.fondo}>
                <Grid item xs={12} className={classes.root}>
                    <Paper elevation={3} className={classes.paperSeparator}>
                    <Typography gutterBottom align="center" variant="h5">
                        Entrantes                                
                    </Typography>
                    </Paper>
                    <Grid>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={4} className={classes.imageContainer}>
                                <div className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg" />
                                </div>
                            </Grid>
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid className={classes.items}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={4} className={classes.imageContainer}>
                                <div className={classes.image}>
                                    <img className={classes.img} alt="complex" src="https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg" />
                                </div>
                            </Grid>
                            <Grid item xs={8} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>         
                <Grid item xs={12} className={classes.root}>
                    <Paper elevation={3} className={classes.paperSeparator}>
                    <Typography gutterBottom align="center" variant="h5">
                        Pescado                                
                    </Typography>
                    </Paper>
                    <Grid>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid className={classes.items}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Grid>
                        <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography gutterBottom align="center" variant="h5">
                                Postres                                
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid className={classes.items}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.root}>
                    <Grid>
                        <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography gutterBottom align="center" variant="h5">
                                Bebidas                                
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid className={classes.items}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
                                    <AvatarGroup max={4}>
                                        <Avatar src={huevos} />
                                        <Avatar src={crustaceo} />
                                        <Avatar src={gluten} />
                                    </AvatarGroup>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">19.00 €</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
		);
	  }
}

export default withStyles(styles)(carta);