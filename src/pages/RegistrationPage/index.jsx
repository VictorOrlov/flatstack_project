import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationPage.module.css';
import Input from '../../atoms/input/index';
import PageTemplate from '../../templates/PageTemplate';
import FormControl from '../../atoms/FormControl';
import Label from '../../atoms/Label';

class RegistrationPage extends Component {
  initialState = {
    email: '',
    password: '',
    passwordRepeat: '',
  }

  state = this.initialState;

  handleChange=(e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePasswordChange=(e) => {
    const value = e.target.value.replace(/[^0-9]/, '');

    this.setState({
      [e.target.name]: value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(this.initialState);
    console.log('Отправка формы');
  };

  validateEmail = () => {
    const email = this.state.email;

    if (email.length === 0) {
      return false;
    }

    return !/^.*@.*\..+$/.test(email);
  };

  render() {
    const { email, password, passwordRepeat } = this.state;
    return (
      <PageTemplate>
        <main className={`${styles.main} row justify-content-center m-0`}>
          <form onSubmit={this.handleSubmit}>
            <FormControl>
              <Label htmlFor="email">Почта</Label>
              <Input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="Введите E-mail"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">Пароль</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Введите пароль"
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="passwordRepeat">Ещё раз</Label>
              <Input
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                value={passwordRepeat}
                placeholder="passwordRepeat"
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <button type="submit">Зарегестрироваться</button>
          </form>
        </main>
      </PageTemplate>
    );
  }
}
RegistrationPage.defaultProps = {
  email: 'email',
  password: 'password',
  passwordRepeat: 'passwordRepeat',
};

RegistrationPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  passwordRepeat: PropTypes.string,
};
export default RegistrationPage;
