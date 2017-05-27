import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WhiteButton.css';

class WhiteButton extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };
  render() {
    const { children } = this.props;
    return <button className={s.btnWhite}>{children}</button>;
  }
}

export default withStyles(s)(WhiteButton);