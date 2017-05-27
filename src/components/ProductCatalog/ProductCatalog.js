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
      
            <div className={s.item}> 
              <Photo source={portrait} altText="portrait" />
              <Link to="/portrait" className={s.link}>Портрети</Link>
            </div>
      
            <div className={s.item}>
              <Photo source={sculpture} altText="sculpture" />
              <Link to="/sculpture" className={s.link}>Скульптури</Link>
            </div>
            
            <div className={s.item}>
              <Photo source={fireplaces} altText="fireplaces" />
              <Link to="/fireplaces" className={s.link}>Каміни</Link>
            </div>
            
            <div className={s.item}>
              <Photo source={table} altText="table" />
              <Link to="/table" className={s.link}>Столешні</Link>
            </div>
      
          </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductCatalog);