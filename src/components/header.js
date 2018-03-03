import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';
import MovieList from './../containers/movie_list';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header!</h1>
        <SearchBar />
        <MovieList />
      </div>
    )
  }
}

export default Header;
