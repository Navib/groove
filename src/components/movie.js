import React, { Component } from 'react';
import ActiveMovie from './../containers/active_movie';
import ActiveTrailer from './../containers/active_trailer';
import Background from './../components/background';
import SingleMovieNav from './../components/single_movie_nav';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="selected-movie-container">
        <div className="container-fluid">
          <Background />
          <ActiveMovie movieId={this.props.match.params.id} history={this.props.history}/>
          <ActiveTrailer movieId={this.props.match.params.id}/>
          <SingleMovieNav movieId={this.props.match.params.id} history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Movie;
