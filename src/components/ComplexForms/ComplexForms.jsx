import React, { Component } from "react";
import css from "./ComplexForms.module.css";

const INITIAL_STATE = {
    inputLogin: "",
    inputPassword: "",
};


export class ComplexForms extends Component {
    state = { ...INITIAL_STATE };

    //! Скидання state в початкове значення INITIAL_STATE
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    // todo: NEW
    handleSubmit = event => {
        event.preventDefault();
        const { inputLogin, inputPassword } = this.state;
        console.log(`🈂️Login: ${inputLogin}, 🈳Password: ${inputPassword}`);
        this.props.onSubmit({ ...this.state }); //! підняття стану + передача state в AppComplexForms.jsx
        this.reset();  //! очищуємо поля всіх інпутів
    };

    handleChange = event => {
        // console.log("event.currentTarget:", event.currentTarget);
        // console.log("event.currentTarget.name:", event.currentTarget.name);
        // console.log("event.currentTarget.value:", event.currentTarget.value);

        //! Деструктуризуємо:
        const { name, value } = event.currentTarget;
        //! Зберігаємо значення інпутів в state, використовуючи властивості об'єкта, що обчислюються
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
        console.log("🛅Значення inputLogin:", inputLogin);
        console.log("🛅Значення inputPassword:", inputPassword);
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
