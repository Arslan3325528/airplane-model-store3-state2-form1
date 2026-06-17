import React, { Component } from "react";
import { nanoid } from 'nanoid' //! для генерації Id елементів форми
import css from "./ComplexFormsGenerationIDRadioButtonCheckboxesSelect.module.css";

const INITIAL_STATE = {
    inputLogin: "",
    inputPassword: "",
    experience: "junior",
    age: "",
    licence: false
};


export class ComplexFormsGenerationIDRadioButtonCheckboxesSelect extends Component {
    state = { ...INITIAL_STATE };

    //! Для генерації Id елементів форми:
    //! Для кожного інпуту робимо окрему властивість класу:
    loginInputId = nanoid();
    passwordInputId = nanoid();

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

    handleChangeCheckbox = event => {
        console.log("event.currentTarget.checked:", event.currentTarget.checked);

        // //! Деструктуризуємо:
        const { checked } = event.currentTarget;

        this.setState({ licence: checked });
    };


    render() {
        const {
            inputLogin,
            inputPassword,
            experience,
            age,
            licence
        } = this.state;

        console.log("----------------------------------------------");
        console.log("🛅Значення inputLogin:", inputLogin);
        console.log("🛅Значення inputPassword:", inputPassword);
        console.log("🛅Значення experience:", experience);
        console.log("🛅Значення age:", age);
        console.log("🛅Значення licence:", licence);
        console.log("______________________________________________");

        return (
            <form
                className={css.loginForm}
                onSubmit={this.handleSubmit}
            >
                {/*//! 4.4.3.Складні форми + 4.4.4.Генерація Id елементів форми */}
                <label
                    className={css.loginFormLabel}
                    // htmlFor="username"
                    htmlFor={this.loginInputId} //? для генерації Id елементів форми
                >
                    Логін:
                </label>
                <input
                    className={css.loginFormInput}
                    type="text"
                    name="inputLogin"
                    // id="username"
                    id={this.loginInputId} //? для генерації Id елементів форми
                    value={inputLogin}
                    onChange={this.handleChange}
                />

                <label
                    className={css.loginFormLabel}
                    // htmlFor="pwd"
                    htmlFor={this.passwordInputId} //* для генерації Id елементів форми
                >
                    Пароль:
                </label>
                <input
                    className={css.loginFormInput}
                    type="password"
                    name="inputPassword"
                    // id="pwd"
                    id={this.passwordInputId} //* для генерації Id елементів форми
                    value={inputPassword}
                    onChange={this.handleChange}
                />

                {/*//! + 4.4.5.Радіокнопки */}
                <label>
                    Junior
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        checked={this.state.experience === "junior"}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Middle
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        checked={this.state.experience === "middle"}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Senior
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        checked={this.state.experience === "senior"}
                        onChange={this.handleChange}
                    />
                </label>

                {/*//! + 4.4.7.Селект */}
                <label>
                    Ваш вік
                    <select
                        name="age"
                        value={age}
                        onChange={this.handleChange}
                    >
                        <option value="" disabled>...</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>
                </label>

                {/*//! + 4.4.6.Чекбокс */}
                <label>
                    Згоден з умовами
                    <input
                        type="checkbox"
                        name="licence"
                        checked={licence}
                        onChange={this.handleChangeCheckbox}
                    />
                </label>

                <button
                    className={css.loginButton}
                    type="submit"
                    disabled={!licence} //! блокування кнопки чекбоксом
                >
                    Submit
                </button>
            </form>
        );
    }
};
