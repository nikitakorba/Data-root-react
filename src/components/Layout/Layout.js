import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';

import Header from '../Header';
import MenuBanner from '../MenuBanner';
import ProductCatalog from '../ProductCatalog';
import AboutUs from '../AboutUs';
import Instagram from '../Instagram';
import Contact from '../Contact';
import Footer from '../Footer';



class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <MenuBanner />
        <ProductCatalog />
        <AboutUs />
        <Instagram />
        <Contact />
        <Footer /> 
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
