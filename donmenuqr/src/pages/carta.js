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
    },
    title: {
        padding: '1vh',
        color: '#88B80F'
    },
    plato: {
        color: '#759E0D',
        fontWeight: '600',
        lineHeight: '2.5vh'
    },
    descripcion: {
        color: '#293804'
    },
    precio: {
        color: '#293804',
        fontWeight: '600'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    }
})

const entrantes =  [
    {
        name: "Coulant de Foie con reducción de pasas y moscatel de Málaga",
        desc: "",
        price: "14 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    },
    {
        name: "Ensalada de tomates en conserva tradicional con ventresca",
        desc: "",
        price: "12 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    },
    {
        name: "Wok de Verduras y langostinos",
        desc: "",
        price: "12 €" 
    },
    {
        name: "Alcachofas con jugo de jamón ibérico",
        desc: "",
        price: "12 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    }
]

const pescado =  [
    {
        name: "Bacalao a la brasa",
        desc: "",
        price: "22 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    },
    {
        name: "Salmón con bacon, gorgonzola y puré de zanahorias",
        desc: "",
        price: "12 €"
    }
]

const carne =  [
    {
        name: "Chuletón de vaca vieja madurada",
        desc: "45 días",
        price: "7 € / 100 gr"
    },
    {
        name: "Presa ibérica con papa arrugá y mojo picón",
        desc: "",
        price: "20 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    },
    {
        name: "Solomillo de buey del Valle del Esla",
        desc: "",
        price: "36 €"
    },
    {
        name: "Chivo lechal malagueño al estilo castellano",
        desc: "",
        price: "28 €",
        image: "https://image.freepik.com/foto-gratis/ensalada-pechuga-pollo-parrilla-vegetales-frescos-tomates-pepinos-hojas-lechuga-ensalada-pollo-comida-sana_2829-4246.jpg"
    }
]

const postres =  [
    {
        name: "Coulant de chocolate con helado de vainilla",
        desc: "",
        price: "6,50 €"
    },
    {
        name: "Tarta de queso con helado de algodón de azúcar",
        desc: "",
        price: "6,50 €"
    },
    {
        name: "Tarta de manzana crujiente con heladod de Baileys",
        desc: "",
        price: "6,50 €"
    },
    {
        name: "Espuma de yogourt al limón con marrón glacé",
        desc: "",
        price: "6 €"
    },
    {
        name: "Tocino de cielo con crema de limón",
        desc: "",
        price: "6 €"
    }
]

class carta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entrantes: [],
            pescado: [],
            carne: [],
            postres: []
        }
    }

    componentWillMount = () => {
        this.setState({
            entrantes: entrantes,
            pescado: pescado,
            carne: carne,
            postres: postres,
            uiLoading: false
        });
		
	};

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
                    <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                        Entrantes                                
                    </Typography>
                    </Paper>
                    { this.state.entrantes.map((entrante) => {
                        return(
                            <Grid className={classes.items}>
                                <Paper elevation={1} className={classes.paper}>
                                    <Grid container spacing={2}>
                                    {
                                        entrante.image && 
                                        <Grid item xs={4} className={classes.imageContainer}>
                                        <div className={classes.image}>
                                            <img className={classes.img} alt="complex" src={entrante.image} />
                                        </div>
                                        </Grid>
                                    }    
                                    <Grid item xs={entrante.image ? 8 : 12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography 
                                                className={classes.plato}
                                                gutterBottom 
                                                align="left" 
                                                variant="subtitle1"
                                            >
                                                {entrante.name}
                                            </Typography>
                                            <Typography 
                                                className={classes.descripcion}
                                                variant="body2"
                                                align="left"
                                                gutterBottom
                                            >
                                                {entrante.desc}
                                            </Typography>
                                            <AvatarGroup max={4}>
                                                <Avatar src={huevos} className={classes.small} />
                                                <Avatar src={crustaceo} className={classes.small} />
                                                <Avatar src={gluten} className={classes.small} />
                                            </AvatarGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            className={classes.precio}
                                            variant="subtitle1">
                                            {entrante.price}
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
                <Grid item xs={12} className={classes.root}>
                    <Paper elevation={3} className={classes.paperSeparator}>
                    <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                        Pescados                                
                    </Typography>
                    </Paper>
                    { this.state.pescado.map((plato) => {
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
                                                variant="subtitle1"
                                            >
                                                {plato.name}
                                            </Typography>
                                            <Typography 
                                                className={classes.descripcion}
                                                variant="body2"
                                                align="left"
                                                gutterBottom
                                            >
                                                {plato.desc}
                                            </Typography>
                                            <AvatarGroup max={4}>
                                                <Avatar src={huevos} className={classes.small}/>
                                                <Avatar src={crustaceo} className={classes.small} />
                                                <Avatar src={gluten} className={classes.small} />
                                            </AvatarGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            className={classes.precio}
                                            variant="subtitle1">
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
                <Grid item xs={12} className={classes.root}>
                    <Paper elevation={3} className={classes.paperSeparator}>
                    <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                        Carnes                                
                    </Typography>
                    </Paper>
                    { this.state.carne.map((plato) => {
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
                                                variant="subtitle1"
                                            >
                                                {plato.name}
                                            </Typography>
                                            <Typography 
                                                className={classes.descripcion}
                                                variant="body2"
                                                align="left"
                                                gutterBottom
                                            >
                                                {plato.desc}
                                            </Typography>
                                            <AvatarGroup max={4}>
                                                <Avatar src={huevos} className={classes.small} />
                                                <Avatar src={crustaceo} className={classes.small} />
                                                <Avatar src={gluten} className={classes.small} />
                                            </AvatarGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            className={classes.precio}
                                            variant="subtitle1">
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
                <Grid item xs={12} className={classes.root}>
                    <Paper elevation={3} className={classes.paperSeparator}>
                    <Typography className = {classes.title} gutterBottom align="center" variant="h5">
                        Postres                                
                    </Typography>
                    </Paper>
                    { this.state.postres.map((plato) => {
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
                                                variant="subtitle1"
                                            >
                                                {plato.name}
                                            </Typography>
                                            <Typography 
                                                className={classes.descripcion}
                                                variant="body2"
                                                align="left"
                                                gutterBottom
                                            >
                                                {plato.desc}
                                            </Typography>
                                            <AvatarGroup max={4}>
                                                <Avatar src={huevos} className={classes.small} />
                                                <Avatar src={crustaceo} className={classes.small} />
                                                <Avatar src={gluten} className={classes.small} />
                                            </AvatarGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography 
                                            className={classes.precio}
                                            variant="subtitle1">
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
            </div>
        </div>
		);
	  }
}

export default withStyles(styles)(carta);