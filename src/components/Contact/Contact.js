import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';
import Form from '../Form';

class Contact extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <p className={s.contactHeader}>Виготовимо наступний шедевр разом</p>
          <p className={s.contactText}>Зв’яжіться з нами та дізнайтесь більше</p>
          <Form />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
