import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductCatalog.css';
import CatalogNavigation from '../CatalogNavigation';
import WhiteButton from '../WhiteButton';
import Link from '../Link';
import Photo from '../Photo';

import fireplaces from './fireplaces.png';
import portrait from './portrait.png';
import sculpture  from './sculpture.png';
import table from './table.png';

const ProductCatalogData = [
  {
    id: 0,
    link: "/portrait",
    text: "Портрети",
    img: portrait,
    alt: "portrait"
  },
  {
    id: 1,
    link: "/sculptur",
    text: "Скульптури",
    img: sculpture,
    alt: "sculpture"
  },
  {
    id: 2,
    link: "/fireplaces",
    text: "Каміни",
    img: fireplaces,
    alt: "fireplaces"
  },
  {
    id: 3,
    link: "/table",
    text: "Столешні",
    img: table,
    alt: "table"
  },
  
]

class ProductCatalog extends React.Component {
  render (){
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.header}>Каталог продукції</h2>
          
          <div className={s.wrapper}>
      
            <div className={s.item}>
              <CatalogNavigation />
              <WhiteButton children="Каталог продукції"/>
            </div>
      
            {
              ProductCatalogData.map(elem =>
                <div className={s.item} key={elem.id} id={elem.id}> 
                  <Photo source={elem.img} altText={elem.alt} />
                  <Link to={elem.link} className={s.link}> {elem.text} </Link>
                </div>
              )
            }
      
          </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductCatalog);