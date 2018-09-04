import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';

export default class SearchBar extends Component {
  handleSearch = () =>{
    return console.log("Searching");
  }

  render() {

    return (
        <ul className="menu">
          <li className="menu-item" href="/">
            <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="icon" className="icon"/>
          </li>
          <li className="menu-item">
            <strong>Joke Norris</strong>
          </li>
          <li className="menu-item--search">
            <Search />
          </li>
        </ul>
    )
  }
}