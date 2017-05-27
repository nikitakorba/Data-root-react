import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Banner from '../Banner';
import Menu from '../Menu';
import WhiteButton from '../WhiteButton';
import s from './MenuBanner.css';

class MenuBanner extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.bannerWrapper}>
            <Banner />
            <div className={s.btnWrapper}> 
              <div className={s.languageSwitch}><a>укр</a> / <a>рус</a></div>
              <WhiteButton children="Зв’язатись з нами"/>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(MenuBanner);