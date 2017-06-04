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
import s from './Header.css';
import WhiteButton from '../WhiteButton';


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
          <p className={s.brandName}>Майстерня</p>
          <div className={s.contactInfo}>
            <p className={s.telNumber}>+38 066 445 59 00</p>
            <p className={s.delivery}>Доставка по Україні</p>
          </div>
          <WhiteButton>Зв’язатись з нами</WhiteButton>
          <div className={s.language}>
            <a href="/">УКР</a>
            <p>/</p>
            <a href="/">РУС</a>
          </div>
          <a href="/" className={s.icon} onClick="showMenu()">&#9776;</a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
