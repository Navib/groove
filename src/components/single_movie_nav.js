import React, { Component } from 'react';
import SimilarMovies from './../containers/similar_movies';

class SingleMovieNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <SimilarMovies movieId={this.props.movieId} history={this.props.history}/>
            </li>
            <li className="nav-item ">Two</li>
            <li className="nav-item ">Three</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default SingleMovieNav;
