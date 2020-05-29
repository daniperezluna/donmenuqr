import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import Lightbox from 'react-spring-lightbox';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	appBar: {
		position: 'relative'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	},
	submitButton: {
		display: 'block',
		color: 'white',
		textAlign: 'center',
		position: 'absolute',
		top: 14,
		right: 10
	},
	floatingButton: {
		position: 'fixed',
		bottom: 0,
		right: 0
	},
	form: {
		width: '98%',
		marginLeft: 13,
		marginTop: theme.spacing(3)
	},
	toolbar: theme.mixins.toolbar,
	root: {
        display: 'flex',
		minWidth: 375
    },
    menuCard: {
        display: 'flex',
        flexDirection: 'column'
    },
    menuCardInfo: {
        flex: '1 0 auto'
    },
    menuCardButtons: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 8,
        paddingBottom: 8
    },
    media: {
        flex: '1 0 auto',
        backgroundSize: 'contain',
        margin: 10
    },
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	pos: {
		marginBottom: 12
	},
	uiProgess: {
		position: 'fixed',
		zIndex: '1000',
		height: '31px',
		width: '31px',
		left: '50%',
		top: '35%'
	},
	dialogeStyle: {
		maxWidth: '50%'
	},
	viewRoot: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
    },
    qrCode: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridList: {
        width: 500,
        height: 450,
    },
    lightBox: {
        height: '100vh',
        width: '100vh',
        background: 'hsla(0,0%,12.2%,0.95)'
    }
});

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menus: '',
			name: '',
			active: true,
            menuId: '',
            createdAt: '',
            imageUrls:[],
			errors: [],
			open: false,
			uiLoading: true,
			buttonType: '',
            viewOpen: false,
            viewImageOpen: false,
            imageError: '',
            files: [],
            images: []
        };

		this.deleteMenuHandler = this.deleteMenuHandler.bind(this);
		this.handleEditClickOpen = this.handleEditClickOpen.bind(this);
        this.handleViewOpen = this.handleViewOpen.bind(this);
        this.handleViewImage = this.handleViewImage.bind(this);
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	componentWillMount = () => {
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.get('/menus')
			.then((response) => {
                console.log(response);
				this.setState({
                    menus: response.data,
                    uiLoading: false
                });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteMenuHandler(data) {
        console.log(data.menu.menuId)
		authMiddleWare(this.props.history);
		const authToken = localStorage.getItem('AuthToken');
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.delete(`menus/${data.menu.menuId}`)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
    }
    
    menuPictureHandler = (menuId) => {
		const authToken = localStorage.getItem('AuthToken');
        let form_data = new FormData();
        
        for (let i = 0; i < this.state.files.length; i++) { 
            form_data.append(`images[${i}]`, this.state.files[i]);
        }
		axios.defaults.headers.common = { Authorization: `${authToken}` };
		axios
			.post(`/menus/image/${menuId}`, form_data, {
				headers: {
					'content-type': 'multipart/form-data'
				}
			})
			.then(() => window.location.reload())
			.catch((error) => {
				if (error.response.status === 403) {
					this.props.history.push('/login');
				}
				console.log(error);
				this.setState({
					uiLoading: false,
					imageError: 'Error in posting the data'
				});
			});
	};

	handleEditClickOpen(data) {
		this.setState({
			name: data.menu.name,
			active: data.menu.active,
			menuId: data.menu.menuId,
			buttonType: 'Edit',
			open: true
		});
	}

	handleViewOpen(data) {
		this.setState({
			name: data.menu.name,
            active: data.menu.active,
            images: data.menu.images,
            menuId: data.menu.menuId,
			viewOpen: true
		});
    }

    handleViewImage() {
        this.setState({
            viewOpen: false,
            viewImageOpen: true,
            imagesGallery: this.state.images.map(value => ({'src': value}))
        })
    }

    handleCloseImage() {
        this.setState({
            viewOpen: true,
            viewImageOpen: false 
        })
    }
    
    showMenuStatus (active) {
        return active ? "Activo" : "No Activo";
    }

    handleImageChange = (event) => {
		this.setState({
            files: event.target.files
		});
	};

	render() {
		const DialogTitle = withStyles(styles)((props) => {
			const { children, classes, onClose, ...other } = props;
			return (
				<MuiDialogTitle disableTypography className={classes.root} {...other}>
					<Typography variant="h6">{children}</Typography>
					{onClose ? (
						<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
							<CloseIcon />
						</IconButton>
					) : null}
				</MuiDialogTitle>
			);
		});

		const DialogContent = withStyles((theme) => ({
			viewRoot: {
				padding: theme.spacing(2)
			}
		}))(MuiDialogContent);

		dayjs.extend(relativeTime);
		const { classes } = this.props;
		const { open, errors, viewOpen } = this.state;

		const handleClickOpen = () => {
			this.setState({
				menuId: '',
				name: '',
                active: '',
				buttonType: '',
				open: true
			});
		};

		const handleSubmit = (event) => {
			authMiddleWare(this.props.history);
			event.preventDefault();
			const newMenu = {
				name: this.state.name,
                active: this.state.active ? this.state.active : true
			};
			let options = {};
			if (this.state.buttonType === 'Edit') {
				options = {
					url: `/menus/${this.state.menuId}`,
					method: 'put',
					data: newMenu
				};
			} else {
				options = {
					url: '/menus',
					method: 'post',
					data: newMenu
				};
			}
            const authToken = localStorage.getItem('AuthToken');
			axios.defaults.headers.common = { Authorization: `${authToken}` };
			axios(options)
				.then((response) => {
                    this.setState({ open: false });
                    this.menuPictureHandler(response.data.id);
                })
				.catch((error) => {
					this.setState({ open: true, errors: error.response.data });
					console.log(error);
                });
		};

		const handleViewClose = () => {
			this.setState({ viewOpen: false });
		};

		const handleClose = (event) => {
			this.setState({ open: false });
        };

        let currentImageIndex = 0;

		if (this.state.uiLoading === true) {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
				</main>
			);
		} else {
			return (
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<IconButton
						className={classes.floatingButton}
						color="primary"
						aria-label="Add Menu"
						onClick={handleClickOpen}
					>
						<AddCircleIcon style={{ fontSize: 60 }} />
					</IconButton>
					<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
									<CloseIcon />
								</IconButton>
								<Typography variant="h6" className={classes.title}>
									{this.state.buttonType === 'Edit' ? 'Edit Menu' : 'Create a new Menu'}
								</Typography>
								<Button
									autoFocus
									color="inherit"
									onClick={handleSubmit}
									className={classes.submitButton}
								>
									{this.state.buttonType === 'Edit' ? 'Save' : 'Submit'}
								</Button>
							</Toolbar>
						</AppBar>

						<form className={classes.form} noValidate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										id="menuTitle"
										label="Nombre del Establecimiento"
										name="name"
										autoComplete="menuTitle"
										helperText={errors.name}
										value={this.state.name}
										error={errors.name ? true : false}
										onChange={this.handleChange}
									/>
								</Grid>
								<Grid item xs={12}>
                                <div className={classes.details}>
									<Button
										variant="outlined"
										color="primary"
										size="small"
										startIcon={<CloudUploadIcon />}
                                        className={classes.uploadButton}
									>
										imágenes
									</Button>
                                    <input 
                                        accept="image/*" 
                                        className={classes.input} 
                                        id="raised-button-file" 
                                        multiple
                                        type="file"
                                        onChange={this.handleImageChange} 
                                        />     
									{this.state.imageError ? (
										<div className={classes.customError}>
											{' '}
											Formato erróneo || Los formatos soportados son PNG y JPG
										</div>
									) : (
										false
									)}
                                </div>
								</Grid>
							</Grid>
						</form>
					</Dialog>

					<Grid container spacing={2}>
						{this.state.menus.map((menu) => (
                            <Grid item xs={12} sm={6}>
								<Card className={classes.root} variant="outlined">
                                    <div className="menuCard">
                                        <CardContent className="menuCardInfo">
                                            <Typography variant="h5" component="h2">
                                                {menu.name}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {this.showMenuStatus(menu.active)}
                                            </Typography>
                                        </CardContent>
                                        <div className="menuCardButtons">
                                            <CardActions>
                                                <Button 
                                                    color="primary" 
                                                    size="small"
                                                    startIcon={<VisibilityIcon/>}
                                                    onClick={() => this.handleViewOpen({ menu })}>
                                                    Ver
                                                </Button>
                                                <Button 
                                                    color="primary" 
                                                    size="small"
                                                    startIcon={<EditIcon/>} 
                                                    onClick={() => this.handleEditClickOpen({ menu })}>
                                                    Editar
                                                </Button>
                                                <Button 
                                                    color="primary" 
                                                    size="small"
                                                    startIcon={<DeleteIcon/>}   
                                                    onClick={() => this.deleteMenuHandler({ menu })}>
                                                    Borrar
                                                </Button>
                                            </CardActions>
                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.media}
                                        image={menu.images[0]}
                                    />
								</Card>
							</Grid>
						))}
					</Grid>

					<Dialog
						onClose={handleViewClose}
						aria-labelledby="customized-dialog-title"
						open={viewOpen}
						fullWidth
						classes={{ paperFullWidth: classes.dialogeStyle }}
					>
						<DialogTitle id="customized-dialog-title" onClose={handleViewClose}>
							{this.state.name}
						</DialogTitle>
						<DialogContent dividers>
                        <div className={classes.qrCode}>
                            <QRCode
                                value={`https://www.donmenuqr.com/cartas/${this.state.menuId}`}
                                size={256}
                                level={"Q"}
                                includeMargin={true}
                                renderAs={"svg"}
                            />
                        </div>
                        <div>
							{ this.state.images &&
								<GridList cellHeight={160} className={classes.gridList} cols={3}>
									{this.state.images.map((tile) => (
										<GridListTile cols={tile.cols || 1} className={classes.qrCode}>
											<img src={tile} alt=""/>
											<GridListTileBar
												actionIcon={
													<IconButton
														onClick={() => {this.handleViewImage()}} 
														className={classes.icon}
														>
														<VisibilityIcon />
													</IconButton>
												}
											/>
											{this.state.viewImageOpen}
										</GridListTile>
									))}
								</GridList>
							}
                        </div>
						</DialogContent>
					</Dialog>
                    <Lightbox
                        isOpen={this.state.viewImageOpen}
                        onPrev={() => { return currentImageIndex - 1} }
                        onNext={() => { return currentImageIndex + 1} }
                        images={this.state.imagesGallery}
                        currentIndex={currentImageIndex}
                        /* Add your own UI */
                        // renderHeader={() => (<CustomHeader />)}
                        // renderFooter={() => (<CustomFooter />)}
                        // renderPrevButton={() => (<CustomLeftArrowButton />)}
                        // renderNextButton={() => (<CustomRightArrowButton />)}
                        // renderImageOverlay={() => (<ImageOverlayComponent >)}

                        /* Add styling */
                        className={classes.lightBox}
                        // style={{ background: "grey" }}

                        /* Handle closing */
                        onClose={() => this.handleCloseImage()}

                        /* Use single or double click to zoom */
                        // singleClickToZoom

                        /* react-spring config for open/close animation */
                        pageTransitionConfig={{
                            from: { transform: "scale(0.75)", opacity: 0 },
                            enter: { transform: "scale(1)", opacity: 1 },
                            leave: { transform: "scale(0.75)", opacity: 0 },
                            config: { mass: 1, tension: 320, friction: 32 }
                        }}
                    />
				</main>
			);
		}
	}
}

export default withStyles(styles)(menu);