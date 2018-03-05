import React, { Component } from 'react';
import SearchBar from './../containers/search_bar';
import MovieList from './../containers/movie_list';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Home!</h1>
        <div className="container">
          <SearchBar history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Home;
