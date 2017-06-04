import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';
import CatalogHeader from '../CatalogHeader';

import img from './img.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';

import block2_img from './block2_img.png';
import block2_img2 from './block2_img2.png';
import block2_img3 from './block2_img3.png';

import block3_img from './block3_img.png';

const CatalogData = [
  { 
    id: 1,
    title: "Внутрішнє та зовнішнє оздоблення", 
    navTitle: "Вид каменю:",
    navLink: [
      {
        id: 100,
        name: "мармур",
        to: "/catalog"
      },
      {
        id: 101,
        name: "граніт",
        to: "/catalog"
      },
      {
        id: 102,
        name: "пісковик",
        to: "/catalog"
      },
      {
        id: 103,
        name: "вапняк",
        to: "/catalog"
      },
      {
        id: 104,
        name: "квацит",
        to: "/catalog"
      },
      {
        id: 105,
        name: "онікс",
        to: "/catalog"
      }
      
    ],
    img: [
      {
        id: 10,
        source: img, 
        altText: "img",
        width: "280",
        height: "420"
      },
      {
        id: 11,
        source: img2, 
        altText: "img2",
        width: "180",
        height: "220"
      },
       {
        id: 12,
        source: img3, 
        altText: "img3",
        width: "180",
        height: "180"
      },
       {
        id: 13,
        source: img4, 
        altText: "img4",
        width: "380",
        height: "160"
      },
       {
        id: 14,
        source: img5, 
        altText: "img5",
        width: "380",
        height: "240"
      }
    ]
  },
  
  {
    id: 2,
    title: "Складні архітектурні вироби", 
    navLink: [],
    img: [
      { 
        id: 20,
        source: block2_img, 
        altText: "img",
        width: "208",
        height: "387"
      },
      {
        id: 21,
        source: block2_img2, 
        altText: "img2",
        width: "283",
        height: "387"
      },
      {
        id: 22,
        source: block2_img3, 
        altText: "img3",
        width: "357",
        height: "383"
      },
    ]
  },
  
  {
    id: 3,
    title: "Садово-паркове мистецтво", 
    navLink: [],
    img: [
      { 
        id: 30,
        source: block3_img, 
        altText: "img",
        width: "860",
        height: "387"
      }
    ]
  }
  
];

class Catalog extends React.Component {
  render () {
    return (
      <div className={s.root}>
      
        <CatalogHeader />
        <h1 className={s.title}>Каталог продукції</h1>
      
        <div className={s.container}>
        
          <div className={s.rootInner}>  
            {
              CatalogData.map(function(elem) {
                
                let img = elem.img.map(function(image){
                  return (
                     <img key = {image.id} 
                          src = {image.source} 
                          alt = {image.altText} 
                          width = {image.width} 
                          height = {image.height}
                      />
                  )
                });
      
                let navLink = elem.navLink.map(function(el) {
                  return (
                    
                    
                    
                    <Link className={ s.link }
                          key = {el.id}
                          id = {el.id} 
                          to = {el.to}
                    > {el.name} </Link>
                          
                  )
                });
    
                return (
                  <div key={elem.id}>
                    <div className={s.containerInner}>
                
                      <div className={s.titleWrapper}>
                        <p > {elem.title} </p>
                      </div>
                  
                      <div className={s.leftContainer}>
                  
                        <div className={s.navWrap}> 
                          {elem.navTitle} 
                          {navLink}
                        </div>
                  
                        <div className={s.imageWrapper}> {img} </div>
                      </div>
                  
                    </div>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);