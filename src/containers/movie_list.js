import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class MovieList extends Component {
  constructor(props) {
    super(props)
  }
  renderMovie(movieData){
    console.log("moviesdata: ",movieData);
    return movieData.map((movie) => {
      const title = movie.title;
      const id = movie.id;
      const poster = ((movie.poster_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`);

      return (
        <div key={id} className="col-md-2 movie-item">
          <Link to={`/movie/${id}`}>
            <img src={poster} className="movie-poster"/>
            <p className="movie-title">{title}</p>
          </Link>
        </div>
        )
    });
  }
  render() {
    return (
      <div className="container movie-container">
        <div className="row movie-row">
          {this.props.movies.map(this.renderMovie)}
        </div>
      </div>
    )
  }
}

const mapStatetoProps  = (movies) => {
  return (movies)
}
export default connect(mapStatetoProps)(MovieList);
