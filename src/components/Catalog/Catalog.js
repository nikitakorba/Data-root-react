import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';
import CatalogHeader from '../CatalogHeader';


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
        source: "https://ucarecdn.com/8a71d0c3-480a-46a5-a3db-ab911af809a9/img.png", 
        altText: "img"
      },
      {
        id: 11,
        source: "https://ucarecdn.com/cf6c3885-8eb7-4625-ae22-7999ba55ecff/img2.png", 
        altText: "img2"
      },
       {
        id: 12,
        source: "https://ucarecdn.com/b51935bf-49d3-44aa-aca1-ee1990c136d7/img3.png", 
        altText: "img3"
      },
       {
        id: 13,
        source: "https://ucarecdn.com/b16fe721-fe02-439c-ab13-277930e03685/img4.png", 
        altText: "img4"
      },
       {
        id: 14,
        source: "https://ucarecdn.com/3bfd927a-8d6d-4653-a1fa-f7bf2058be67/img5.png", 
        altText: "img5"
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
        source: "https://ucarecdn.com/7c9cbc43-7de1-447b-bc31-5fec940cc153/block2_img.png", 
        altText: "img"
      },
      {
        id: 21,
        source: "https://ucarecdn.com/d84c10a7-2a23-44fe-a6e6-bf3307576404/block2_img2.png", 
        altText: "img2"
      },
      {
        id: 22,
        source: "https://ucarecdn.com/762daf5f-8f96-430b-9d62-d7cef7aca5b1/block2_img3.png", 
        altText: "img3"
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
        source: "https://ucarecdn.com/6521cd32-f42a-4bb6-98d9-ce7d13bda51c/block3_img.png", 
        altText: "img"
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
                      />
                  )
                });
      
                let navLink = elem.navLink.map(function(el) {
                  return (
                    <Link className={ s.link }
                          key = {el.id}
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
                  
                      <div className={s.rightContainer}>
                  
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