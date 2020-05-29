import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import ContactUs from '../modules/components/ContactUs';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <ContactUs />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);