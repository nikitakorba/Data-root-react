/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogHeader.css';
import WhiteButton from '../WhiteButton';
import Link from '../Link';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  showMenu() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }


  render() {
    return (
      <div className={s.root}>
        <div className={this.state.active ? s.responsive : s.container}>
          <Link to="/"><h1 className={s.brandName}>Майстерня</h1></Link>
          <div className={s.contactInfo}>
            <a className={s.telNumber} href="tel:+380664455900">+38 066 445 59 00</a>
            <p className={s.delivery}>Доставка по Україні</p>
          </div>
          <WhiteButton>Зв’язатись з нами</WhiteButton>
          <div className={s.language}>
            <a href="/">УКР</a>
            <p>/</p>
            <a href="/">РУС</a>
          </div>
          <a href="/" className={s.icon} >&#9776;</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
