import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Menu.css';
import Navigation from '../Navigation'
import Link from '../Link';
import logoUrl from './logo-small.svg';

class Menu extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
  
          <div className={s.wrapper}>
            <div>
              <img src={logoUrl} srcSet={`${logoUrl}`} width="48" height="133" alt="logo" />
            </div>
            <div className={s.textWrapper}>
              <span className={s.menuTitle}>Мастерня</span>
              <div>
                <p className={s.phone}>+38 066 445 59 00</p>
                <p className={s.address}>м. Мукачево, вул. Переяславська, 1</p>
              </div>
            </div>
          </div>

          <div>
            <Navigation />
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Menu);