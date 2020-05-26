/*import React, { Component } from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
    backImage: {
        backgroundImage: 'url(https://www.donmenuqr.com/assets/flyer.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
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
            <div className={classes.backImage}>
                
            </div>
		);
	  }
}

export default withStyles(styles)(carta);*/

import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);