import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BlackButton.css';

class BlackButton extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    btnType: PropTypes.string,
  };

  static defaultProps = {
    btnType: 'button',
  };

  render() {
    const { children, btnType } = this.props;
    return <button type={btnType} className={s.btnResponsive}>{children}</button>;
  }
}

export default withStyles(s)(BlackButton);
