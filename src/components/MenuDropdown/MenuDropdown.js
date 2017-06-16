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
import s from './MenuDropdown.css';
import Navigation from '../Navigation';
import group from './Group.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p className={s.responsiveBrand}>Майстерня</p>
          <a href="/" onClick={this.showMenu} className={s.icon}>&#9776;</a>
        </div>
        { this.state.active ?
          <div className={s.paddingDiv}>
            <div className={s.contactInfo}>
              <img src={group} alt="logo" />
              <div className={s.adressInfo}>
                <p className={s.brandName}>Майстерня</p>
                <p className={s.telNumber}>+38 066 445 59 00</p>
                <p className={s.delivery}>м. Мукачево, вул. Переяславська, 1</p>
              </div>
            </div>
            <Navigation />
          </div>
            :
            null
        }
      </div>
    );
  }
}

export default withStyles(s)(Header);
