import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';


import CatalogItem from '../CatalogItem';

import img from './img.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';

import block2_img from './block2_img.png';
import block2_img2 from './block2_img2.png';
import block2_img3 from './block2_img3.png';

import block3_img from './block3_img.png';

class Catalog extends React.Component {
  render () {
    return (
      <div className={s.root}>
        <div className={s.container}>
          
          <h2 className={s.title}> {this.props.header} </h2>
      
          <h3> {this.props.section} </h3>
      
          <div>  
            <CatalogItem  
              title = {"Внутрішнє та зовнішнє оздоблення"}
              source = {img} altText="img" 
              source2 = {img2} altText2="img2"
              source3 = {img3} altText3="img3" 
              source4 = {img4} altText4="img4" 
              source5 = {img5} altText5="img5"
            />
      
            <CatalogItem 
            title = {"Складні архітектурні вироби"}
              source = {block2_img} altText="img" 
              source2 = {block2_img2} altText2="img2"
              source3 = {block2_img3} altText3="img3" 
            />
      
            <CatalogItem 
              title = {"Садово-паркове мистецтво"}
              source = {block3_img} altText="img"
            />
          </div>
               
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);