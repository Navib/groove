import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';
import MovieList from './../containers/movie_list';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home!</h1>
        <SearchBar />
        <MovieList />
      </div>
    )
  }
}

export default Home;
