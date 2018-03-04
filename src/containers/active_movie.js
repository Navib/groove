import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activeMovie } from '../actions/index';

class ActiveMovie extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.activeMovie(this.props.movieId)
  }
  renderInfo(movieData) {
    const title = movieData.title;
    const overview = movieData.overview;
    const tagline = movieData.tagline;
    const releaseDate = movieData.release_date;
    const runtime = movieData.runtime;
    const voteAverage = movieData.vote_average;
    const genres = movieData.genres.map((genre) => {
      return (
        <span key={genre.id}>{genre.name} </span>
      )
    });
    const countries = movieData.production_countries.map((country) => {
      return (
        <span key={country.name}>{country.iso_3166_1} </span>
      )
    });
    const poster = ((movieData.poster_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w92/${movieData.poster_path}`);


    return (
      <div className="mv-info">
        <h4 className="mv-title">{title}</h4>
        <p className="mv-tagline">{tagline}</p>
        <div className="meta-info">
          <img src={poster} className="movie-poster-single"/>
          <ul className="meta-list col-md-6">
            <li><span className="meta-heading">Release: </span>{releaseDate.slice(0, releaseDate.indexOf("-"))}</li>
            <li><span className="meta-heading">Duration: </span>{runtime} min</li>
            <li><span className="meta-heading">User Score: </span>{voteAverage}</li>
            <li><span className="meta-heading">Country: </span>{countries}</li>
          </ul>
        </div>

        <p className="mv-overview">{overview}</p>
        <p className="mv-cats">{genres}</p>
      </div>
    )
  }
  render() {
    if(!this.props.selectedMovie) {
      return <div className="col-md-4">...Loading</div>;
    }
    console.log("render Info: ", this.props);

    return (
      <div className="col-md-4">
        {this.renderInfo(this.props.selectedMovie)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.activeMovie[0],
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activeMovie }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ActiveMovie);
