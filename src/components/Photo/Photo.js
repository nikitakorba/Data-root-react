import React from 'react';
import PropTypes from 'prop-types';

class Photo extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  };
  render() {
    const { source, altText } = this.props;
    return <img src={source} alt={altText} />;
  }
}

export default Photo;