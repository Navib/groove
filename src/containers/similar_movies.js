import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSimilarMovies } from '../actions/index';
import Swiper from 'swiper';
import SimilarMoviesSlide from './../components/similar_movies_slide';
import { Link, withRouter } from 'react-router-dom';
import $ from 'jquery';

class SimilarMovies extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchSimilarMovies(this.props.movieId)
  }
  componentDidUpdate() {
    const swiper = new Swiper('.similar-container', {
      slidesPerView: 6,
      spaceBetween: 17,
      scrollbar: {
        el: '.similar-scrollbar',
        hide: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="tooltip"]').on("click", function() {
      $(this).tooltip('hide');
    });
  }
  componentWillReceiveProps(nextProps, props) {
    if(nextProps.movieId != this.props.movieId){
      this.props.fetchSimilarMovies(nextProps.movieId)
    }
  }
  renderMovies(movieData) {
    return movieData.map((movie) => {
      const id = movie.id;
      const title = movie.title;
      const poster = ((movie.poster_path === null) ? 'http://via.placeholder.com/185x278' : `http://image.tmdb.org/t/p/w185/${movie.poster_path}`);
      const overview = movie.overview.substring(0, 140) + '...';
      const rating =  movie.vote_average;
      const releaseDate = movie.release_date;
      const language = movie.original_language;

  return (
        <SimilarMoviesSlide
          key={id}
          movieId={id}
          title={title}
          poster={poster}
          rating={rating}
          overview={overview}
          releaseDate={releaseDate.slice(0, releaseDate.indexOf("-"))}
          language={language.toUpperCase()}
        />
      )
    });
  }
  render() {
    if(!this.props.similarMovies) {
      return (<div className="col-md-12">loading</div>)
    }
    console.log("Render Similiar Movies: ", this.props.similarMovies);
    return (
      <div className="col-md-12 swiper-container similar-container">
        <h3>Similar Movies <i className="fas fa-chevron-right"></i></h3>
        <div className="swiper-wrapper similar-wrapper">
          {this.props.similarMovies.map(this.renderMovies)}
        </div>
        <div className="swiper-scrollbar similar-scrollbar"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  similarMovies:state.similarMovies,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchSimilarMovies }, dispatch);
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SimilarMovies));
