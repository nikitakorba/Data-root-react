import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogNavigation.css';
import Link from '../Link';

class CatalogNavigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/decoration">Внутрішнє та зовнішнє оздоблення</Link>
        <Link className={s.link} to="/sophisticated_products">Складні архітектурні вироби</Link>
        <Link className={s.link} to="/garden_art">Садово-паркове мистецтво</Link>
      </div>
    );
  }
}

export default withStyles(s)(CatalogNavigation);