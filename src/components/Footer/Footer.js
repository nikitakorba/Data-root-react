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
import Photo from '../Photo';
import Navigation from '../Navigation';


class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <iframe className={s.map} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP4z6unisOUcRqsKSp9UA2gI&key=AIzaSyAKlGlFjWFEb1YfW6zMxMqHEVifAsCfmxk"></iframe>
          <div className={s.infoContainer}>
            <div className={s.contacts}>
              <h3 className={s.contactsHeadline}>Контакти</h3>
              <a className={s.contactsTel} href="tel:+380664455900">+38 066 445 59 00</a>
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
