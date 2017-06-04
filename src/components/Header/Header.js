import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import logoUrl from './logo-small.svg';
import logoUrl2x from './logo-small@2x.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
      
          <div className={s.header}>
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="103" height="285" alt="logo" />
            <span className={s.headerTitle}>Майстерня</span>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
