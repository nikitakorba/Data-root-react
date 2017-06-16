import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductCatalog.css';
import CatalogNavigation from '../CatalogNavigation';
import WhiteButton from '../WhiteButton';
import Link from '../Link';
import Photo from '../Photo';


const ProductCatalogData = [
  {
    id: 0,
    link: "/catalog",
    text: "Портрети",
    img: "https://ucarecdn.com/2a40b232-7e6d-4f89-bc91-a1afd3b7076f/portrait.png",
    alt: "portrait"
  },
  {
    id: 1,
    link: "/catalog",
    text: "Скульптури",
    img: "https://ucarecdn.com/01471d73-29f6-4c00-a560-e74990c84247/sculpture.png",
    alt: "sculpture"
  },
  {
    id: 2,
    link: "/catalog",
    text: "Каміни",
    img: "https://ucarecdn.com/d96bd401-7603-45e7-85bd-672c84a7300e/fireplaces.png",
    alt: "fireplaces"
  },
  {
    id: 3,
    link: "/table",
    text: "Столешні",
    img: "https://ucarecdn.com/0411dd29-1740-4402-98cb-8130ff9392a0/table.png",
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
              <Link to="/catalog"> 
                <WhiteButton children="Каталог продукції"/>
              </Link>
            </div>
      
            {
              ProductCatalogData.map(elem =>
                <div className={s.item} key={elem.id}> 
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