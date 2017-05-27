import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Banner.css';


class Banner extends React.Component {
  render() {
    return (
      <div className={s.root}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Створюємо шедeври <br />
            з натурального каменю <br />
            власноруч </h1>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(Banner);