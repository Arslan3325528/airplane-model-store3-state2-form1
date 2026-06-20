import React, { Component } from "react";
import css from "./ScaleSlection.module.css";


//? Підняття стану
//! Компонент-клас
export class ScaleSlection extends Component {
  state = {
    modelScale: "all" //! масштаб моделі
  };

  handleChangeModelScale = (event) => {
    // console.log("Зміна масштабу моделі");
    // console.log("event.currentTarget:", event.currentTarget);
    // console.log("event.currentTarget.name:", event.currentTarget.name);
    // console.log("event.currentTarget.value:", event.currentTarget.value);

    //! Деструктуризуємо:
    const { name, value } = event.currentTarget;
    //! Зберігаємо значення інпутів в state, використовуючи властивості об'єкта, що обчислюються
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      modelScale, //! масштаб моделі
    } = this.state;

    console.log("******************************************************");
    console.log("ℹ️Масштаб моделі :", modelScale);
    console.log("******************************************************");

    return (
      <>
        {/* {(!isCartOn || numberOfSelectedModels) && */}
        <div className={css.scaleSlectionBox}>
          <h3 className={css.scaleSlectionTitle}>Оберіть масштаб моделі:</h3>
          <label>
            {/* масштаб моделі */}
            <select
              className={css.scaleSlectionSelect}
              name="modelScale"
              value={modelScale}
              onChange={this.handleChangeModelScale}
            >
              <option className={css.scaleSlectionOption} value="all">Всі</option>
              <option className={css.scaleSlectionOption} value="114">1:114</option>
              <option className={css.scaleSlectionOption} value="100">1:100</option>
              <option className={css.scaleSlectionOption} value="72">1:72</option>
              <option className={css.scaleSlectionOption} value="60">1:60</option>
              <option className={css.scaleSlectionOption} value="48">1:48</option>
              <option className={css.scaleSlectionOption} value="32">1:32</option>
            </select>
          </label>
        </div>
        {/* } */}
      </>
    )
  }
};