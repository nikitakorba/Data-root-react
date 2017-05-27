import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.css';
import BlackButton from '../BlackButton';

const plName = 'Ім’я';
const plTel = 'Телефон';
const plMail = 'E-mail';
const plTextarea = 'Ваша ідея або питання';
const typeEmail = 'email';
const typeText = 'text';
const typeTel = 'tel';
class Form extends React.Component {
  render() {
    return (
      <div className={s.formContent}>
        <input type={typeText} className={s.formInput} placeholder={plName} required />
        <input type={typeTel} className={s.formInput} placeholder={plTel}required />
        <input type={typeEmail} className={s.formInput} placeholder={plMail}required />
        <textarea className={s.formTextarea} placeholder={plTextarea} required />
        <BlackButton btnType={'submit'}>Зв’язатись</BlackButton>
      </div>
    );
  }
}

export default withStyles(s)(Form);
