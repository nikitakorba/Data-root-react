import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';

class Catalog extends React.Component {
  render () {
    return (
      <div className={s.root}>
        <div className={s.container}>
          
          <h2 className={s.title}> {this.props.header} </h2>
      
          <h3> {this.props.section} <h3>
          <div className={s.imageContainer}>
          
          </div>
               
      
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);