import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progess: {
		position: 'absolute'
	}
});

class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
            name: '',
            message: '',
			errors: [],
            loading: false,
            sent: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
			});
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
    };
    
    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: ''
        })
    }

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const mailData = {
			email: this.state.email,
            name: this.state.name,
            message: this.state.message
		};
		axios
			.post('/send', mailData)
			.then(() => {
				this.setState({ 
                    loading: false,
                    sent: true
				}, this.resetForm());		
			})
			.catch((error) => {				
				this.setState({
					loading: false
				});
			});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Container component="main" maxWidth="sm">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h4">
						Contacta con nosotros
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
                            margin="normal"
							required
                            fullWidth
                            value={this.state.name}
							name="name"
							label="Nombre"
							type="text"
							id="name"
							autoComplete="Nombre"
							helperText={errors.name}
							error={errors.name ? true : false}
							onChange={this.handleChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
                            fullWidth
                            value={this.state.email}
							id="email"
							label="Email"
							name="email"
							autoComplete="email"
							helperText={errors.email}
							error={errors.email ? true : false}
							onChange={this.handleChange}
						/>
                        <TextField
                            id="standard-multiline-static"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.message}
                            id="message"
                            label="Mensaje"
                            name="message"
                            multiline
                            rows={7}
                            helperText={errors.message}
							error={errors.message ? true : false}
							onChange={this.handleChange}
                        />
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={this.handleSubmit}
							disabled={this.state.sent || !this.state.email || !this.state.name || !this.state.message}
						>
							{ this.state.sent ? "Mensaje Enviado" : "Enviar" }
							{loading && <CircularProgress size={30} className={classes.progess} />}
						</Button>
						{errors.general && (
							<Typography variant="body2" className={classes.customError}>
								{errors.general}
							</Typography>
						)}
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(ContactUs);

