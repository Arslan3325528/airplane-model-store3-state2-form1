// console.log(
//   "%c 4.4.3.Складні форми",
//   "color: white; background-color: #D33F49",
// );

import React, { Component } from "react";
import css from "./AppComplexForms.module.css";

const INITIAL_STATE = {
  inputLogin: "",
  inputPassword: "",
};


export class AppComplexForms extends Component {
  state = { ...INITIAL_STATE };

  //! Скидання state в початкове значення INITIAL_STATE
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  // todo: OLD
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const login = form.elements.login.value;
  //   const password = form.elements.password.value;
  //   console.log(login, password);
  //   this.props.onSubmit({ login, password });
  //   form.reset();
  // };

  // todo: NEW
  handleSubmit = event => {
    event.preventDefault();
    const { inputLogin, inputPassword } = this.state;
    console.log(`Login: ${inputLogin}, Password: ${inputPassword}`);
    this.props.onSubmit({ ...this.state });
    this.reset();  //! очищуємо поля всіх інпутів
  };

  // handleLoginChange = event => {
  //   console.log("event.currentTarget.value:", event.currentTarget.value);
  //   const text = event.currentTarget.value;

  //   this.setState({ inputLogin: text });
  // };

  // handlePasswordChange = event => {
  //   console.log("event.currentTarget.value:", event.currentTarget.value);
  //   const text = event.currentTarget.value;

  //   this.setState({ inputPassword: text });
  // };

  handleChange = event => {
    console.log("event.currentTarget:", event.currentTarget);
    console.log("event.currentTarget.name:", event.currentTarget.name);
    console.log("event.currentTarget.value:", event.currentTarget.value);

    //! Використовуємо властивості об'єкта, що обчислюються
    // this.setState({
    //   [event.currentTarget.name]: event.currentTarget.value
    // });

    //! Деструктуризуємо:
    const { name, value } = event.currentTarget;
    //! Зберігаємо значення інпутів в state
    this.setState({
      [name]: value,
    });
  };


  render() {
    const {
      inputLogin,
      inputPassword,
    } = this.state;

    console.log("----------------------------------------------");
    console.log("Значення inputLogin:", inputLogin);
    console.log("Значення inputPassword:", inputPassword);
    console.log("______________________________________________");

    return (
      <form
        className={css.loginForm}
        onSubmit={this.handleSubmit}
      >
        <label
          className={css.loginFormLabel}
          htmlFor="username"
        >
          Логін:
        </label>
        <input
          className={css.loginFormInput}
          type="text"
          name="inputLogin"
          id="username"
          value={inputLogin}
          // onChange={this.handleLoginChange}
          onChange={this.handleChange}
        />

        <label
          className={css.loginFormLabel}
          htmlFor="pwd"
        >
          Пароль:
        </label>
        <input
          className={css.loginFormInput}
          type="password"
          name="inputPassword"
          id="pwd"
          value={inputPassword}
          // onChange={this.handlePasswordChange}
          onChange={this.handleChange}
        />

        <button
          className={css.loginButton}
          type="submit"
        >
          Login
        </button>
      </form>
    );
  }
};
