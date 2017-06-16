/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';

import Header from '../../components/Header';
import MenuBanner from '../../components/MenuBanner';
import ProductCatalog from '../../components/ProductCatalog';
import AboutUs from '../../components/AboutUs';
import Instagram from '../../components/Instagram';


export default {

  path: '/',

  async action() {
    
    
    return {
      component:  
        <Layout>
        <Header />
        <MenuBanner />
        
        <ProductCatalog />
        <AboutUs />
        <Instagram />
        </Layout>,
    };
  },

};
