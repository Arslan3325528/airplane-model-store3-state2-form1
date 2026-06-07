import React, { Component } from "react";
import debounce from "lodash.debounce";

import data from '@/json/cards_10-10';
import css from "./AppSearchDebounce.module.css";

console.log("data:", data);

export class AppSearchDebounce extends Component {
  state = {
    value: "",
  };

  debouncedSearch = debounce((text) => {
    console.log("⏰Пошук-debounce:", text);
  }, 500);

  handleChange = (event) => {
    const text = event.target.value;

    this.setState({
      value: text,
    });

    this.debouncedSearch(text);
  };

  componentWillUnmount() {
    this.debouncedSearch.cancel();
  }

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
          {data.map(item =>
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
}
