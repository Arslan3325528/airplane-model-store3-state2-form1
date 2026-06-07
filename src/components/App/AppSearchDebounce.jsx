import React, { Component } from "react";
import debounce from "lodash.debounce"; //! 2.Імпорт:

import data from '@/json/cards_10-10';
import css from "./AppSearchDebounce.module.css";

console.log("data:", data);

export class AppSearchDebounce extends Component {
  state = {
    value: "",
    dataSearch: data
  };


  //! 3.Винесимо всю логіку фільтрації в окремий метод:
  performSearch = textInput => {
    //! _____________Логіка фільтрації___________
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(textInput.toLowerCase())
    );

    this.setState({
      dataSearch: filtered,
    });
    //! _________________________________________
  }

  //! 4.Створюємо debounce як class property:
  debouncedSearch = debounce((text) => {
    console.log("⏰Пошук-debounce:", text);
    this.performSearch(text);
  }, 500);


  handleChange = (event) => {
    const text = event.target.value;

    this.setState({
      value: text,
    });

    //! 6.1 .Переносимо всю логіку фільтрації в окремий метод performSearch:
    //! _____________Логіка фільтрації___________
    // const filtered = data.filter(item =>
    //   item.title.toLowerCase().includes(text.toLowerCase())
    //     );

    // this.setState({
    //   dataSearch: filtered,
    // });
    //! _________________________________________

    //! 6.2 Запуск debounce з логікою фільтрації:
    this.debouncedSearch(text);
  };

  
  //! 5.Припинення debounce:
  componentWillUnmount() {
    this.debouncedSearch.cancel();
  };


  render() {
    return (
      <>
        <input
          className={css.inputSearch}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <ul className={css.cards}>
          {this.state.dataSearch.map(item =>
            <li
              className={css.card}
              key={item.id}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          )}
        </ul>
      </>
    );
  }
};
