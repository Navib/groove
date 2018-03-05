import React, { Component } from 'react';
import ActiveMovie from './../containers/active_movie';
import ActiveTrailer from './../containers/active_trailer';
import SearchBar from './../containers/search_bar';
import Background from './../components/background';
import SimilarMovies from './../containers/similar_movies';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="selected-movie-container">
        <div className="container-fluid">
          <SearchBar history={this.props.history}/>
        </div>
        <div className="container-fluid">
          <Background />
          <h1>Single Movie</h1>
          <ActiveTrailer movieId={this.props.match.params.id}/>
          <ActiveMovie movieId={this.props.match.params.id}/>
          <SimilarMovies movieId={this.props.match.params.id} history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Movie;
