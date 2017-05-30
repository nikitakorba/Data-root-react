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
            <h2 className={s.title}> Про нас </h2>
            <div className={s.text}>

              <p>Майстерня - це місце, де ваша ідея реалізовується з натурального каменю. Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.</p>
              <p>Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги монтування.</p>
              <p>Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.</p>
            
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