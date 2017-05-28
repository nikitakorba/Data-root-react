import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AboutUs.css';
import Photo from '../Photo';
import Link from '../Link';

import about from './about.png';

class AboutUs extends React.Component {
   static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.imageWrapper}>
            <img src={about} srcSet={`${about}`} width="100%" className={s.image} alt="logo" />
          </div>
          
          <div className={s.item + ' ' + s.wrapper}>
            <h2 className={s.title}> { title } </h2>
            <div className={s.text}>

              <p dangerouslySetInnerHTML={{ __html: html }} />
            
            </div>

            <div className={s.linkWrapper}>
              <Link to="/more_details" className={s.link}>Детальніше</Link>
              <Link to="/view_works" className={s.link}>Переглянути роботи</Link>
            </div>
          </div>
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(AboutUs);