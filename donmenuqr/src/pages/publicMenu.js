import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import withStyles from '@material-ui/core/styles/withStyles';

import axios from 'axios';
import { authMiddleWare } from '../util/auth';

const styles = (theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
});

class publicMenu extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
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
            file: [],
			imageGallery: [],
			photoIndex: 0,
      		isOpen: false,
			params: this.props.match.params.menuId
        };
	}

	componentDidMount() {
		axios
			.get(`/menus/${this.state.params}`)
			.then((response) => {
				this.setState({
					menu: response.data,
					imageGallery: response.data.imageUrls
				},console.log(this.state.menu));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	
	render() {
		const { photoIndex, isOpen } = this.state;
	 
		return (
		  <div>	 
			  <Lightbox
				mainSrc={this.state.imageGallery[photoIndex]}
				nextSrc={this.state.imageGallery[(photoIndex + 1) % this.state.imageGallery.length]}
				prevSrc={this.state.imageGallery[(photoIndex + this.state.imageGallery.length - 1) % this.state.imageGallery.length]}
				onCloseRequest={() => this.setState({ isOpen: false })}
				onMovePrevRequest={() =>
				  this.setState({
					photoIndex: (photoIndex + this.state.imageGallery.length - 1) % this.state.imageGallery.length,
				  })
				}
				onMoveNextRequest={() =>
				  this.setState({
					photoIndex: (photoIndex + 1) % this.state.imageGallery.length,
				  })
				}
			  />
		  </div>
		);
	  }
}

export default withStyles(styles)(publicMenu);