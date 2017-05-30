import React from 'react';
import Layout from '../../components/Layout';
import Catalog from '../../components/Catalog';

export default {
  
  path: '/catalog',
  
  async action() {
    return {
      title: 'Каталог',
      component: <Layout><Catalog /></Layout>,
    };
  },
};

