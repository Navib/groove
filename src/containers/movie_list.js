import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class MovieList extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="tooltip"]').on("click", function() {
      $(this).tooltip('hide');
    });
  }
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').on("click", function() {
      $(this).tooltip('hide');
    });
  }

  renderMovie(movieData){
    // console.log("moviesdata: ",movieData);
    return movieData.map((movie) => {
      const title = movie.title;
      const id = movie.id;
      const poster = ((movie.poster_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`);
      const overview = movie.overview.substring(0, 140) + '...';
      const rating =  movie.vote_average;
      const releaseDate = movie.release_date;
      const language = movie.original_language;

      return (
        <div key={id} className="col-lg-2 col-md-4 col-sm-12 movie-item" data-toggle="tooltip" data-trigger="hover" title={`<h6>${title}</h6><p class="score"><span>User Score: ${rating}</span><span>${releaseDate.slice(0, releaseDate.indexOf("-"))}</span><span>Language: ${language.toUpperCase()}</span></p><p>${overview}</p>`} data-html="true" data-delay="300">
          <Link to={`/movie/${id}`}>
            <img src={poster} className="movie-poster"/>
            <p className="movie-title">{title}</p>
          </Link>
        </div>
        )
    });
  }
  render() {
    //console.log("movieList: ", this.props);
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
