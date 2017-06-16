import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/catalog">Каталог продукції</Link>
        <Link className={s.link} to="/about">Про нас</Link>
        <Link className={s.link} to="/catalog">Наші роботи</Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
