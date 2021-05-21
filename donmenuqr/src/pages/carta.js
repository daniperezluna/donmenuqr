import React, { Component } from 'react';
import axios from 'axios';
import logo from '../assets/YERBAGUENA.png'
import crustaceo from '../assets/crustaceos.png'
import huevos from '../assets/huevos.png'
import gluten from '../assets/gluten.png'
import '../menu.css'

import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
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
import backYerba from '../assets/backYerba.png'
import yerbaguena from '../assets/json/yerbaguena.json';
import fondoYerba from '../assets/fondoYerba.jpg'

const urlGMaps = "https://www.google.es/maps/place/Restaurante+Yerbag%C3%BCena/@37.0362944,-4.8676718,17z/data=!3m1!4b1!4m5!3m4!1s0xd72a5308f319d21:0xec736b58ff467a35!8m2!3d37.0362944!4d-4.8654778";
const urlFacebook = "https://www.facebook.com/REST.YERBAGUENA/";
const urlTwitter = "https://twitter.com/YERBAGUENA";
const urlInstagram = "https://www.instagram.com/javi_yerbaguena/";

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
        margin: '3vh auto 0 auto',
        background: 'linear-gradient(45deg, #6eb535db, #9b9c9cc2)'
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
        backgroundImage: fondoYerba,
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
        fontFamily: 'AlinasHand',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    plato: {
        color: '#000',
        fontFamily: 'AlinasHand',
        fontWeight: '600',
        lineHeight: '3vh'
    },
    descripcion: {
        color: '#000',
        fontFamily: 'AlinasHand',
        fontWeight: '600',
    },
    precio: {
        color: '#000',
        fontWeight: '600',
        fontFamily: 'AlinasHand'
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
    }
})

const orderMenu = (orden, menu) => {
    return orden.map(o => { for (var key in menu) { if (menu === o) return menu[key]}})
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

class carta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrantes: [],
            pescado: [],
            carne: [],
            postres: [],
            open: false,
            uiLoading: true,
			params: this.props.match.params.menuId
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

    /*componentDidMount = () => {
        axios
        .get(`/menus/${this.state.params}`)
        .then((response) => {
            console.log(response.data.ordenSecciones)
            this.setState({
                menu: response.data,
                secciones: response.data.ordenSecciones,
                platos: response.data.ordenSecciones.map(o => { for (var key in response.data.carta) { if (key === o) return response.data.carta[key]}}),
                uiLoading: false
            });
        })
        .catch((err) => {
            console.log(err);
        });
	};*/

    componentDidMount = () => {
        this.setState({
            secciones: Object.keys(yerbaguena),
            platos: Object.values(yerbaguena)
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
                        { this.state.secciones.map((seccion, index) => {
                            return (
                        <Grid item xs={12} className={classes.root}>
                            <Paper elevation={3} className={classes.paperSeparator}>
                            <Typography className = {classes.title} gutterBottom align="center" variant="h4">
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
                                            <Grid item xs={plato.image ? 8 : 12} sm container spacing={2}>
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
                                                    {
                                                        plato.avatar &&    
                                                        <AvatarGroup max={4}>
                                                            <Avatar src={huevos} className={classes.small} />
                                                            <Avatar src={crustaceo} className={classes.small} />
                                                            <Avatar src={gluten} className={classes.small} />
                                                        </AvatarGroup>
                                                    }
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography 
                                                    className={classes.precio}
                                                    variant="h6">
                                                    {plato.price}
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
                        <Grid>
                            <div className={classes.itemsInfo}>
                                <img
                                src={backYerba}
                                alt="restaurante"
                                className={classes.image}
                                />                        
                            </div>
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
                                        Avda. de la Estación s/n
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                        29320 Campillos, Málaga
                                        </Typography>
                                        <Typography variant="subtitle1" align="center">
                                            <PhoneIcon className={classes.icon}/>
                                            952722320
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
                                            <TwitterIcon fontSize="large" onClick={() => this.handleClick(urlTwitter)}/>
                                        </Grid>
                                        <Grid item>
                                            <FacebookIcon fontSize="large" onClick={() => this.handleClick(urlFacebook)}/>
                                        </Grid>
                                        <Grid item>
                                            <InstagramIcon fontSize="large" onClick={() => this.handleClick(urlInstagram)}/>
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

export default withStyles(styles)(carta);