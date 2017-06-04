import React from 'react';
import Layout from '../../components/Layout';
import Catalog from '../../components/Catalog';
import AboutUs from '../../components/AboutUs';

export default {
  
  path: '/catalog',
  
  async action() {
    return {
      title: 'Каталог',
      component: <Layout><Catalog /><AboutUs /></Layout>,
    };
  },
};

