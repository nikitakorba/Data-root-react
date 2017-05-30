/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import MenuBanner from '../../components/MenuBanner';

export default {

  path: '/about',

  async action() {
    return {
      title: 'Про нас',
      component: 
        <Layout>
          <Header />
        </Layout>,
    };
  },

};
