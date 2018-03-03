import React, { Component } from 'react';
import ActiveMovie from './../containers/active_movie';
import ActiveTrailer from './../containers/active_trailer';

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Single Movie</h1>
        <ActiveTrailer movieId={this.props.match.params.id}/>
        <ActiveMovie movieId={this.props.match.params.id}/>
      </div>
    )
  }
}

export default Movie;
