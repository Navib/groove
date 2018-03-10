import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';
import MovieList from './../containers/movie_list';

class Search extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Home!</h1>
        <div className="container">
          <SearchBar history={this.props.history} class="col-md-6 col-md-offset-3"/>
        </div>
        <MovieList />
      </div>
    )
  }
}

export default Search;
