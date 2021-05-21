import React, { Component } from 'react';
import logo from '../assets/meson.png'
import altramuces from '../assets/alergenos/altramuces.png'
import apio from '../assets/alergenos/apio.png'
import azufre from '../assets/alergenos/azufre.png'
import cacahuetes from '../assets/alergenos/cacahuetes.png'
import crustaceos from '../assets/alergenos/crustaceos.png'
import gluten from '../assets/alergenos/gluten.png'
import huevos from '../assets/alergenos/huevos.png'
import lacteos from '../assets/alergenos/lacteos.png'
import moluscos from '../assets/alergenos/moluscos.png'
import mostaza from '../assets/alergenos/mostaza.png'
import nueces from '../assets/alergenos/nueces.png'
import pescado from '../assets/alergenos/pescado.png'
import sesamo from '../assets/alergenos/sesamo.png'
import soja from '../assets/alergenos/soja.png'

import espanol from '../assets/espanol.png'
import english from '../assets/english.png'

import '../menu.css'

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import mesonDiego from '../assets/json/mesondiego.json';
import mesonDiegoEN from '../assets/json/mesondiegoEN.json';

const urlGMaps = "https://www.google.com/maps/place/El+Mes%C3%B3n+de+Diego/@36.9423637,-4.9161491,15z/data=!4m2!3m1!1s0x0:0x89f329cfe6abce1f?sa=X&ved=2ahUKEwjQrJeq-uPpAhXV8uAKHVMPBJwQ_BIwDHoECBQQCA";
const urlFacebook = "https://www.facebook.com/pages/category/Spanish-Restaurant/El-Mes%C3%B3n-de-Diego-800039963375152/";
const alergenos = ["altramuces","apio","azufre","cacahuetes","crustaceos","gluten","huevos","lacteos","moluscos","mostaza","nueces","pescado","sesamo","soja"];

const styles = (theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        backgroundImage: 'url()',
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
        margin: '3vh auto 0 auto',
        background: 'linear-gradient(45deg, #730f0f, #9b9c9cc2)'
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
        margin: '0 0 0.5vh 0'
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
    },
    title: {
        padding: '1vh',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    plato: {
        color: '#000',
        lineHeight: '3.75vh'
    },
    descripcion: {
        color: '#000',
        fontWeight: '600',
    },
    precio: {
        color: '#000',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    footer: {
        background: 'black',
        color: 'white',
        padding: '1vh'
    },
    icon: {
        verticalAlign: 'middle',
        padding: '0.5vh'
    },
    itemsInfo: {
        margin: '5vh 0'
    },
    languages: {
        justifyContent: 'center',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    alergenos: {
        display: 'flex',
    },
    alergenosInfo: {
        display: 'flex',
        columns: '2 auto',
        textTransform: 'capitalize',
        margin: '2vh',
        '& > *': {
            margin: '0 1.5vh 0 0',
        },
    },
    alergenosContainer: {
        columns: '2 auto',
        display: 'inline-block'    
    },
    active: {
        border: '0.5vh solid #730f0f',
        padding: '0.5vh'
    },
    inactive: {
        border: '0.5vh solid transparent',
        padding: '0.5vh'
    },
    allergensInfo: {
        textAlign: 'justify'
    }
})

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

class cartaMeson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            uiLoading: true,
            params: this.props.match.params.menuId,
            lang: 'es'
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true 
        });
    };
    
    handleClose = () => {
        this.setState({
            open: false 
        });
    };

    handleClick = (url) => {
        window.open(url, "_blank");
    }

    changeLanguage = (lang) => {
        if (lang === 'es') {
            this.setState({
                secciones: Object.keys(mesonDiego),
                platos: Object.values(mesonDiego),
                lang: 'es'
            });
        } else {
            this.setState({
                secciones: Object.keys(mesonDiegoEN),
                platos: Object.values(mesonDiegoEN),
                lang: 'en'
            });
        }
    }

    returnAlergeno = (alerg) => {
        switch(alerg) {
            case "altramuces":
                return altramuces;
            case "apio":
                return apio;
            case "azufre":
                return azufre;
            case "cacahuetes":
                return cacahuetes;
            case "crustaceos":
                return crustaceos;
            case "gluten":
                return gluten;  
            case "huevos":
                return huevos;
            case "lacteos":
                return lacteos;
            case "moluscos":
                return moluscos
            case "mostaza":
                return mostaza;
            case "nueces":
                return nueces;
            case "pescado":
                return pescado;
            case "sesamo":
                return sesamo;
            case "soja":
                return soja;
        }
    }

    componentDidMount = () => {
        this.setState({
            secciones: Object.keys(mesonDiego),
            platos: Object.values(mesonDiego)
        },() => {
             this.setState({
                uiLoading: false
            })
        });
    };
    
	render() {
        const { classes } = this.props;
        if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {		
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
                        <div className={classes.languages}>
                            <Avatar 
                                className={this.state.lang === 'es' ? [classes.active] : [classes.inactive] }
                                alt="Español" 
                                src={espanol} 
                                onClick={() => this.changeLanguage("es")} />
                            <Avatar
                                className={this.state.lang === 'en' ? [classes.active] : [classes.inactive] } 
                                alt="English" 
                                src={english} 
                                onClick={() => this.changeLanguage("en")} />
                        </div>
                        { this.state.secciones.map((seccion, index) => {
                            return (
                        <Grid item xs={12} className={classes.root}>
                            <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                                {seccion}                                
                            </Typography>
                            </Paper>
                            { this.state.platos[index].map((plato) => {
                                return(
                                    <Grid className={classes.items}>
                                        <Paper elevation={1} className={classes.paper}>
                                            <Grid container spacing={2}>
                                            {
                                                plato.image && 
                                                <Grid item xs={4} className={classes.imageContainer}>
                                                <div className={classes.image}>
                                                    <img className={classes.img} alt="complex" src={plato.image} />
                                                </div>
                                                </Grid>
                                            }    
                                                <Grid item xs={plato.image ? 8 : 12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography 
                                                            className={classes.plato}
                                                            gutterBottom 
                                                            align="left" 
                                                            variant="h6"
                                                        >
                                                            {plato.name}
                                                        </Typography>
                                                        {
                                                            plato.desc &&
                                                            <Typography 
                                                                className={classes.descripcion}
                                                                variant="body2"
                                                                align="left"
                                                                gutterBottom
                                                            >
                                                                {plato.desc}
                                                            </Typography>
                                                        }
                                                        <div className={classes.alergenos}>
                                                        {
                                                            plato.alergenos && 
                                                            plato.alergenos.map(alergeno => {
                                                                return (
                                                                        <Avatar 
                                                                            src={this.returnAlergeno(alergeno)} 
                                                                            className={classes.small}
                                                                        />
                                                                        )
                                                                    })
                                                                }
                                                        </div>   
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography 
                                                        className={classes.precio}
                                                        variant="h6">
                                                        {plato.price[0]}
                                                    </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                );
                            })
                            }
                        </Grid>
                            );
                        })
                        }
                        <Grid item xs={12}>
                            <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography 
                                className = {classes.title} 
                                gutterBottom 
                                align="center" 
                                variant="h5"
                                onClick={()=>this.handleClick("https://app.cartasfrigo.com/QR/AA009")}>
                            { this.state.lang === 'es' ? 'Postres - Pulsa aquí' : 'Desserts - Push here' }
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                            { this.state.lang === 'es' ? 'Alérgenos' : 'Food Allergens' }
                            </Typography>
                            </Paper>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.allergensInfo}>
                                { this.state.lang === 'es' ?
                                'EN CASO DE ALERGIA O INTOLERANCIA ALIMENTARIA CONSULTAR AL CAMARERO'
                                :
                                'IN CASE OF FOOD ALLERGY OR INTOLERANCE, ASK THE WAITER FOR ADVICE' }
                                </Typography>
                            </Paper>
                        </Grid>
                    </div>
                    <div className={classes.footer}>
                        <Typography onClick={() => this.handleClickOpen()}
                            variant="subtitle1">
                            <ContactSupportIcon className={classes.icon}/>
                            Info del Establecimiento
                        </Typography>    
                    </div>
                    <Dialog fullScreen open={this.state.open} onClose={() => this.handleClose()} TransitionComponent={Transition}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={() => this.handleClose()} aria-label="close">
                            <CloseIcon />
                            </IconButton>
                        </Toolbar>
                        <div>
                            <Grid container justify="center">
                                <Grid item xs={6}>
                                    <div className={classes.itemsInfo}>
                                        <img
                                        src={logo}
                                        alt="logo"
                                        className={classes.image}
                                        />
                                        <Typography variant="subtitle1" align="center">
                                        Carretera A-367 Ronda-Ardales-Malaga Km 35
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                        29327 Teba, España
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                            <PhoneIcon className={classes.icon}/>
                                            952031009
                                        </Typography>
                                    </div>
                                    <div className={classes.itemsInfo}>
                                        <Grid item>
                                            <Button 
                                                onClick={() => this.handleClick(urlGMaps)}
                                                fullWidth
                                                variant='outlined'>
                                                    CÓMO LLEGAR
                                            </Button>
                                        </Grid>
                                    </div>
                                    <Grid container justify="center" spacing={2}>
                                        <Grid item>
                                            <FacebookIcon fontSize="large" onClick={() => this.handleClick(urlFacebook)}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Dialog>    
                </div>
            );
        }   
    }
}

export default withStyles(styles)(cartaMeson);