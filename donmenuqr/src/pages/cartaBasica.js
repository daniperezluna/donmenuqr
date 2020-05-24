import React, { Component } from 'react';
import '../menu.css'

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundColor: 'white'
    },
    header: {
        flexGrow: 0,
        height: '5rem',
        minHeight: '5rem'
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
        flexGrow: 1,
        marginTop:  '10px',
        overflow: 'auto'
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
        flexGrow: 1,
        overflow: 'auto'
    },
    imgFondo: {
        backgroundColor: 'white'
    }
})

class cartaBasica extends Component {

	render() {
		const { classes } = this.props;		
		return (
            <div className={classes.container}>
                <header className={classes.header}>
                    <Grid item xs={12} >
                        <Card className={classes.Card}>
                            <Typography gutterBottom align="center" variant="h3">
                                Yerbagüena                                
                            </Typography>
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
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom align="left" variant="subtitle1">
                                        Titulo del plato
                                    </Typography>
                                    <Typography variant="body2" align="left" gutterBottom>
                                    Descripción del plato
                                    </Typography>
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

export default withStyles(styles)(cartaBasica);