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
import s from './Footer.css';
import mapImage from './map.jpg';
import Photo from '../Photo';
import Navigation from '../Navigation/';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Photo source={mapImage} altText="map" />
          <div className={s.infoContainer}>
            <div className={s.contacts}>
              <p className={s.contactsHeadline}>Контакти</p>
              <p className={s.contactsTel}>+38 066 445 59 00</p>
              <p className={s.contactsAdress}>м.Мукачево, вул. Переяславська, 1</p>
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
