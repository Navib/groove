import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header!</h1>
        <SearchBar />
      </div>
    )
  }
}

export default Header;
